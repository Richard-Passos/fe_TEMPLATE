import { ComponentPropsWithRef, forwardRef } from 'react';

import scrollAnimations from '@/animations/scroll';
import { Icon, ScrollAnimate } from '@/components/atoms';
import { IconProps } from '@/components/atoms/Icon';
import { cn } from '@/utils';

type HighImpactHeroExtraIconOrganismOwnProps = {
  animation: keyof typeof scrollAnimations;
  wrapperProps?: ComponentPropsWithRef<'div'>;
};

type HighImpactHeroExtraIconOrganismProps =
  HighImpactHeroExtraIconOrganismOwnProps &
    Omit<IconProps, keyof HighImpactHeroExtraIconOrganismOwnProps>;

const HighImpactHeroExtraIconOrganism = (
  {
    animation,
    className,
    wrapperProps,
    ...props
  }: HighImpactHeroExtraIconOrganismProps,
  ref: HighImpactHeroExtraIconOrganismProps['ref']
) => {
  return (
    <ScrollAnimate config={scrollAnimations[animation]}>
      <div
        {...wrapperProps}
        className={cn('size-6', wrapperProps?.className)}
      >
        <Icon
          className={cn('size-full', className)}
          ref={ref}
          {...props}
        />
      </div>
    </ScrollAnimate>
  );
};

export default forwardRef(HighImpactHeroExtraIconOrganism);
export type { HighImpactHeroExtraIconOrganismProps };
