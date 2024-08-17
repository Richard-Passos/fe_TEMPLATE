import { ComponentPropsWithRef, forwardRef } from 'react';

import scrollAnimations from '@/animations/scroll';
import { Icon, ScrollAnimate } from '@/components/atoms';
import { IconProps } from '@/components/atoms/Icon';
import { cn } from '@/utils';

type PrimaryHeroExtraIconOrganismOwnProps = {
  data: {
    src: IconProps['src'];
    animation: keyof typeof scrollAnimations;
  };
  wrapperProps?: ComponentPropsWithRef<'div'>;
};

type PrimaryHeroExtraIconOrganismProps = PrimaryHeroExtraIconOrganismOwnProps &
  Omit<IconProps, keyof PrimaryHeroExtraIconOrganismOwnProps | 'src'>;

const PrimaryHeroExtraIconOrganism = (
  { data, wrapperProps, ...props }: PrimaryHeroExtraIconOrganismProps,
  ref: PrimaryHeroExtraIconOrganismProps['ref']
) => {
  return (
    <ScrollAnimate config={scrollAnimations[data.animation]}>
      <div
        {...wrapperProps}
        className={cn('size-6', wrapperProps?.className)}
      >
        <Icon
          ref={ref}
          src={data.src}
          {...props}
        />
      </div>
    </ScrollAnimate>
  );
};

export default forwardRef(PrimaryHeroExtraIconOrganism);
export type { PrimaryHeroExtraIconOrganismProps };
