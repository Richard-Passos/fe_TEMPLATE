'use client';

import { Box, DefaultMantineColor, StyleProp } from '@mantine/core';
import { ComponentPropsWithRef, forwardRef } from 'react';

import { Bg, Lines, ScrollAnimate } from '@/components/atoms';
import { ConfigOptions } from '@/components/atoms/ScrollAnimate/Root';
import { cn } from '@/utils';

type SectionTransitionOrganismOwnProps = {
  color?: StyleProp<DefaultMantineColor>;
  hasTransition?: boolean;
};

type SectionTransitionOrganismProps = SectionTransitionOrganismOwnProps &
  Omit<ComponentPropsWithRef<'div'>, keyof SectionTransitionOrganismOwnProps>;

const SectionTransitionOrganism = (
  { color, hasTransition, className, ...props }: SectionTransitionOrganismProps,
  ref: SectionTransitionOrganismProps['ref']
) => {
  const animationConfig: ConfigOptions = {
    prop: '--h',
    propPoints: ['0%', '100%']
  };

  return (
    <ScrollAnimate config={animationConfig}>
      <div
        className={cn(
          'absolute top-px h-20 w-screen',
          !hasTransition && 'h-0',
          className
        )}
        ref={ref}
        {...props}
      >
        <div className='relative h-[--h] w-full -translate-y-full rotate-180 overflow-hidden'>
          <Bg
            className='pointer-events-auto absolute left-1/2 z-0 h-[750%] w-[150%] -translate-x-1/2 -translate-y-[86.666%] overflow-hidden rounded-[50%]'
            color={color}
          >
            <Lines className='z-0' />
          </Bg>
        </div>
      </div>
    </ScrollAnimate>
  );
};

export default forwardRef(SectionTransitionOrganism);
export type { SectionTransitionOrganismProps };
