'use client';

import { createPolymorphicComponent } from '@mantine/core';
import { ComponentPropsWithRef, forwardRef, useRef } from 'react';

import { Bg, Lines } from '@/components/atoms';
import { BgProps } from '@/components/atoms/Bg';
import { cn, setRefs } from '@/utils';

import Transition, { TransitionProps } from './Transition';
import useSetTheme from './useSetTheme';

type SectionOrganismOwnProps = Pick<TransitionProps, 'hasTransition'> & {
  bg: BgProps['color'];
  theme: 'light' | 'dark';
  forceTheme?: boolean;
};

type SectionOrganismProps = SectionOrganismOwnProps &
  Omit<ComponentPropsWithRef<'section'>, keyof SectionOrganismOwnProps>;

const SectionOrganism = (
  {
    hasTransition = true,
    forceTheme,
    children,
    className,
    bg,
    theme,
    ...props
  }: SectionOrganismProps,
  ref: SectionOrganismProps['ref']
) => {
  const innerRef = useRef<HTMLDivElement>(null);

  useSetTheme(innerRef, theme, forceTheme);

  return (
    <section
      className={cn(
        'relative flex min-h-screen w-full flex-col items-center py-[--py] [--py:--spacing-lg] 2xl:min-h-bounds',
        hasTransition && 'pt-[calc(var(--py)*1.5)] dark:bg-blue-5',
        className
      )}
      data-theme={theme}
      ref={setRefs(ref, innerRef)}
      {...props}
    >
      {children}

      <Transition
        color={bg}
        hasTransition={hasTransition}
      />

      <Bg color={bg}>
        <Lines />
      </Bg>
    </section>
  );
};

export default createPolymorphicComponent<'section', SectionOrganismProps>(
  forwardRef(SectionOrganism)
);
export type { SectionOrganismProps };
