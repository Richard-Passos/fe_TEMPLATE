'use client';

import { DefaultMantineColor, StyleProp } from '@mantine/core';
import { ComponentPropsWithRef, forwardRef } from 'react';

import { yFullScrollAnim } from '@/animations/scroll';
import { Bg, Lines, ScrollAnimate } from '@/components/atoms';
import { ScrollAnimateConfigOptions } from '@/components/atoms/ScrollAnimate/Root';
import { cn } from '@/utils';

type SectionTransitionOrganismOwnProps = {
  color?: StyleProp<DefaultMantineColor>;
  reverse?: boolean;
};

type SectionTransitionOrganismProps = SectionTransitionOrganismOwnProps &
  Omit<ComponentPropsWithRef<'div'>, keyof SectionTransitionOrganismOwnProps>;

const SectionTransitionOrganism = (
  { color, reverse, className, ...props }: SectionTransitionOrganismProps,
  ref: SectionTransitionOrganismProps['ref']
) => {
  const animationConfig: ScrollAnimateConfigOptions = {
    scrollConfig: {
      offset: ['0 1', '-0.05 0']
    },
    prop: '--h',
    propPoints: ['0%', '100%']
  };

  return (
    <ScrollAnimate config={animationConfig}>
      <div
        className={cn(
          'pointer-events-none absolute top-px h-20 w-screen',
          className
        )}
        ref={ref}
        {...props}
      >
        <div
          className={cn(
            'relative flex w-full justify-center overflow-hidden',
            reverse
              ? 'h-[calc(100%-var(--h))] -translate-y-0.5'
              : 'h-[--h] -translate-y-full rotate-180'
          )}
        >
          <Bg
            className='pointer-events-auto z-0 h-[750%] w-[150%] -translate-y-[86.666%] rounded-[50%]'
            color={color}
          >
            <ScrollAnimate config={yFullScrollAnim}>
              <Lines className={cn(!reverse && 'rotate-180')} />
            </ScrollAnimate>
          </Bg>
        </div>
      </div>
    </ScrollAnimate>
  );
};

export default forwardRef(SectionTransitionOrganism);
export type { SectionTransitionOrganismProps };
