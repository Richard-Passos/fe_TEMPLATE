'use client';

import { DefaultMantineColor, StyleProp } from '@mantine/core';
import { ComponentPropsWithRef, forwardRef } from 'react';

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
            'relative w-full overflow-hidden',
            reverse
              ? 'h-[calc(100%-var(--h))] -translate-y-0.5'
              : 'h-[--h] -translate-y-full rotate-180'
          )}
        >
          <Bg
            className='pointer-events-auto left-1/2 z-0 h-[750%] w-[150%] -translate-x-1/2 -translate-y-[86.666%] rounded-[50%]'
            color={color}
          >
            <div className={cn('absolute inset-0', !reverse && 'rotate-180')}>
              <ScrollAnimate
                config={{ prop: 'y', propPoints: ['-100%', '100%'] }}
              >
                <Lines
                  className={cn(
                    !reverse &&
                      '-translate-x-[(50%_-_var(--removed-body-scroll-bar-size,0px)/2)]'
                  )}
                />
              </ScrollAnimate>
            </div>
          </Bg>
        </div>
      </div>
    </ScrollAnimate>
  );
};

export default forwardRef(SectionTransitionOrganism);
export type { SectionTransitionOrganismProps };
