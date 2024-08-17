import { forwardRef } from 'react';

import { ScrollAnimate } from '@/components/atoms';
import {
  ScrollAnimateConfigOptions,
  ScrollAnimateProps
} from '@/components/atoms/ScrollAnimate';

const SCROLL_OFFSET = ['0 1', '0 .55'],
  ANIMATION_CONFIG = {
    y: {
      scrollConfig: {
        offset: SCROLL_OFFSET
      },
      prop: 'y',
      propPoints: ['50%', '0%']
    } as ScrollAnimateConfigOptions,
    rotate: {
      scrollConfig: {
        offset: SCROLL_OFFSET
      },
      prop: '--tw-rotate',
      propPoints: ['12deg', '0deg']
    } as ScrollAnimateConfigOptions,
    opacity: {
      scrollConfig: {
        offset: SCROLL_OFFSET
      },
      prop: 'opacity',
      propPoints: [0, 1]
    } as ScrollAnimateConfigOptions
  };

type BentoGridScrollAnimateMoleculeOwnProps = {
  config?: {
    y?: ScrollAnimateConfigOptions;
    rotate?: ScrollAnimateConfigOptions;
    opacity?: ScrollAnimateConfigOptions;
  };
};

type BentoGridScrollAnimateMoleculeProps =
  BentoGridScrollAnimateMoleculeOwnProps &
    Omit<ScrollAnimateProps, keyof BentoGridScrollAnimateMoleculeOwnProps>;

const BentoGridScrollAnimateMolecule = (
  { config, children, ...props }: BentoGridScrollAnimateMoleculeProps,
  ref: BentoGridScrollAnimateMoleculeProps['ref']
) => {
  return (
    <ScrollAnimate
      ref={ref}
      {...props}
      config={{ ...ANIMATION_CONFIG.y, ...config?.y }}
    >
      <ScrollAnimate config={{ ...ANIMATION_CONFIG.rotate, ...config?.rotate }}>
        <ScrollAnimate
          config={{ ...ANIMATION_CONFIG.opacity, ...config?.opacity }}
        >
          {children}
        </ScrollAnimate>
      </ScrollAnimate>
    </ScrollAnimate>
  );
};

export default forwardRef(BentoGridScrollAnimateMolecule);
export type { BentoGridScrollAnimateMoleculeProps };
