import { forwardRef } from 'react';

import { ScrollAnimate } from '@/components/atoms';
import {
  ScrollAnimateConfigOptions,
  ScrollAnimateProps
} from '@/components/atoms/ScrollAnimate';
import { cn } from '@/utils';

const ANIMATION_CONFIG: {
  y: ScrollAnimateConfigOptions;
  scale: ScrollAnimateConfigOptions;
  opacity: ScrollAnimateConfigOptions;
} = {
  y: {
    scrollConfig: {
      offset: ['0 0', '1 0']
    },
    prop: 'y',
    propPoints: ['0%', '75%']
  },
  scale: {
    scrollConfig: {
      offset: ['0 0', '1 0']
    },
    prop: '--scale',
    propPoints: [1, 0.85]
  },
  opacity: {
    scrollConfig: {
      offset: ['0 0', '.75 0']
    },
    prop: '--opacity',
    propPoints: [1, 0]
  }
};

type HighImpactHeroScrollAnimateOrganismOwnProps = Partial<
  Pick<ScrollAnimateProps, 'config'>
>;

type HighImpactHeroScrollAnimateOrganismProps =
  HighImpactHeroScrollAnimateOrganismOwnProps &
    Omit<ScrollAnimateProps, keyof HighImpactHeroScrollAnimateOrganismOwnProps>;

const HighImpactHeroScrollAnimateOrganism = (
  { className, children, ...props }: HighImpactHeroScrollAnimateOrganismProps,
  ref: HighImpactHeroScrollAnimateOrganismProps['ref']
) => {
  return (
    <ScrollAnimate
      className={cn('max-sm:!translate-y-0', className)}
      config={ANIMATION_CONFIG.y}
      ref={ref}
      {...props}
    >
      <ScrollAnimate config={ANIMATION_CONFIG.scale}>
        <ScrollAnimate config={ANIMATION_CONFIG.opacity}>
          {children}
        </ScrollAnimate>
      </ScrollAnimate>
    </ScrollAnimate>
  );
};

export default forwardRef(HighImpactHeroScrollAnimateOrganism);
export type { HighImpactHeroScrollAnimateOrganismProps };
