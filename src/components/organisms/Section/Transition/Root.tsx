'use client';

import { ComponentPropsWithRef, forwardRef } from 'react';

import { Bg, Lines, ScrollAnimate } from '@/components/atoms';
import { BgProps } from '@/components/atoms/Bg';
import { LinesProps } from '@/components/atoms/Lines';
import { ScrollAnimateConfigOptions } from '@/components/atoms/ScrollAnimate/Root';
import { cn } from '@/utils';

const HEIGHT = '5rem';

type SectionTransitionOrganismOwnProps = {
  reverse?: boolean;
  wrapperProps?: Partial<ComponentPropsWithRef<'div'>>;
  bgProps?: Partial<BgProps>;
  linesProps?: Partial<LinesProps>;
};

type SectionTransitionOrganismProps = SectionTransitionOrganismOwnProps &
  Omit<ComponentPropsWithRef<'div'>, keyof SectionTransitionOrganismOwnProps>;

const SectionTransitionOrganism = (
  {
    reverse,
    className,
    style,
    wrapperProps,
    bgProps,
    linesProps,
    ...props
  }: SectionTransitionOrganismProps,
  ref: SectionTransitionOrganismProps['ref']
) => {
  const animationConfig: {
    [key in 'y' | 'radius']: ScrollAnimateConfigOptions;
  } = {
    y: {
      scrollConfig: {
        offset: ['0 1', '0 0']
      },
      prop: '--y',
      propPoints: [HEIGHT, '0rem']
    },
    radius: {
      scrollConfig: {
        offset: ['1 1', '0 0']
      },
      prop: '--radius',
      propPoints: ['0%', '50%']
    }
  };

  return (
    <ScrollAnimate config={animationConfig.y}>
      <ScrollAnimate config={animationConfig.radius}>
        <div
          className={cn(
            'pointer-events-none absolute top-0 z-10 h-[--height] w-screen',
            className
          )}
          ref={ref}
          style={
            {
              '--height': HEIGHT,
              ...style
            } as typeof style
          }
          {...props}
        >
          <div
            {...wrapperProps}
            className={cn(
              'relative size-full overflow-hidden',
              reverse ? '-top-px' : 'bottom-full translate-y-px',
              wrapperProps?.className
            )}
          >
            <Bg
              {...bgProps}
              className={cn(
                'pointer-events-auto -inset-x-[25%] z-0 aspect-[1/.25] size-auto',
                reverse ? 'bottom-0 top-auto' : 'bottom-auto top-0',
                bgProps?.className
              )}
              style={{
                clipPath: reverse
                  ? 'inset(0 0 calc(var(--height) - var(--y)) 0 round calc(50% - var(--radius)))'
                  : 'inset(var(--y) 0 0 0 round var(--radius))',
                ...bgProps?.style
              }}
            >
              <Lines {...linesProps} />
            </Bg>
          </div>
        </div>
      </ScrollAnimate>
    </ScrollAnimate>
  );
};

export default forwardRef(SectionTransitionOrganism);
export type { SectionTransitionOrganismProps };
