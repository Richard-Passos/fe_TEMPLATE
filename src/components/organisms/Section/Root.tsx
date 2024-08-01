'use client';

import { createPolymorphicComponent } from '@mantine/core';
import { ComponentPropsWithRef, forwardRef, useRef } from 'react';

import { Bg, Lines } from '@/components/atoms';
import { BgProps } from '@/components/atoms/Bg';
import { cn, setRefs } from '@/utils';

import Transition, { TransitionProps } from './Transition';
import useSetTheme from './useSetTheme';

type SectionOrganismOwnProps = {
  bg?: BgProps['color'] | TransitionProps['color'];
  theme: 'light' | 'dark';
  bgProps?: BgProps;
  hasTransition?: boolean;
  transitionProps?: TransitionProps;
};

type SectionOrganismProps = SectionOrganismOwnProps &
  Omit<ComponentPropsWithRef<'section'>, keyof SectionOrganismOwnProps>;

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
    <section
      className={cn(
        'relative flex min-h-screen w-full flex-col items-center py-[--py] [--py:--spacing-lg] 2xl:min-h-bounds',
        hasTransition && 'pt-[calc(var(--py)*1.5)]',
        className
      )}
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
      >
        <Lines />
      </Bg>
    </section>
  );
};

export default createPolymorphicComponent<'section', SectionOrganismProps>(
  forwardRef(SectionOrganism)
);
export type { SectionOrganismProps };
