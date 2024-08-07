'use client';

import { createPolymorphicComponent } from '@mantine/core';
import { forwardRef, useRef } from 'react';

import { Bg, Box, Lines } from '@/components/atoms';
import { BgProps } from '@/components/atoms/Bg';
import { BoxProps } from '@/components/atoms/Box';
import { cn, setRefs } from '@/utils';

import Transition, { TransitionProps } from './Transition';
import useSetTheme from './useSetTheme';

type SectionOrganismOwnProps = {
  bg?: BgProps['color'] | TransitionProps['color'];
  theme: 'light' | 'dark';
  bgProps?: Partial<BgProps>;
  hasTransition?: boolean;
  transitionProps?: Partial<TransitionProps>;
};

type SectionOrganismProps = SectionOrganismOwnProps &
  Omit<BoxProps, keyof SectionOrganismOwnProps>;

const SectionOrganism = (
  {
    bg,
    hasTransition = true,
    children,
    className,
    theme,
    bgProps,
    transitionProps,
    ...props
  }: SectionOrganismProps,
  ref: SectionOrganismProps['ref']
) => {
  const innerRef = useRef<HTMLDivElement>(null);

  useSetTheme(innerRef, theme);

  return (
    <Box
      className={cn(
        'relative flex min-h-screen w-full flex-col items-center py-[--py] [--py:--spacing-2xl] 2xl:min-h-bounds',
        hasTransition && 'pt-[calc(var(--py)*1.5)]',
        className
      )}
      component='section'
      data-mantine-color-scheme={theme}
      ref={setRefs(ref, innerRef)}
      {...props}
    >
      {children}

      {hasTransition && (
        <Transition
          color={bg}
          {...transitionProps}
        />
      )}

      <Bg
        color={bg}
        {...bgProps}
        className={cn('[clip-path:inset(0)]', bgProps?.className)}
      >
        <Lines />
      </Bg>
    </Box>
  );
};

export default createPolymorphicComponent<'section', SectionOrganismProps>(
  forwardRef(SectionOrganism)
);
export type { SectionOrganismProps };
