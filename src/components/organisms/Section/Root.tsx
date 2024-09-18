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
  theme: Parameters<typeof useSetTheme>['1'];
  forceTheme?: Parameters<typeof useSetTheme>['2'];
  bgProps?: Partial<BgProps>;
  hasTransition?: boolean;
  transitionProps?: Partial<TransitionProps>;
};

type SectionOrganismProps = SectionOrganismOwnProps &
  Omit<BoxProps, keyof SectionOrganismOwnProps>;

const SectionOrganism = (
  {
    hasTransition = true,
    className,
    theme,
    children,
    forceTheme,
    bgProps,
    transitionProps,
    ...props
  }: SectionOrganismProps,
  ref: SectionOrganismProps['ref']
) => {
  const innerRef = useRef<HTMLDivElement>(null);

  useSetTheme(innerRef, theme, forceTheme);

  return (
    <Box
      className={cn(
        `
          relative flex min-h-screen w-full flex-col items-center
          py-[--section-spacing-md]

          [--section-spacing-lg:calc(theme(spacing.2xl)*2)]

          [--section-spacing-md:calc(theme(spacing.xl)+theme(spacing.sm))]

          [--section-spacing-sm:calc(theme(spacing.lg)+theme(spacing.sm))]

          2xl:min-h-bounds
        `,
        hasTransition && 'pt-[--section-spacing-lg]',
        className
      )}
      component='section'
      data-has-transition={hasTransition}
      data-theme={theme}
      ref={setRefs(ref, innerRef)}
      {...props}
    >
      {children}

      {hasTransition && <Transition {...transitionProps} />}

      <Bg {...bgProps}>
        <Lines />
      </Bg>
    </Box>
  );
};

export default createPolymorphicComponent<'section', SectionOrganismProps>(
  forwardRef(SectionOrganism)
);
export type { SectionOrganismProps };
