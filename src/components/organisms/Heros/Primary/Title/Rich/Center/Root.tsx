import { ComponentPropsWithRef, forwardRef } from 'react';

import { cn } from '@/utils';

type PrimaryHeroTitleCenterOrganismOwnProps = {};

type PrimaryHeroTitleCenterOrganismProps =
  PrimaryHeroTitleCenterOrganismOwnProps &
    Omit<
      ComponentPropsWithRef<'span'>,
      keyof PrimaryHeroTitleCenterOrganismOwnProps
    >;

const PrimaryHeroTitleCenterOrganism = (
  { className, ...props }: PrimaryHeroTitleCenterOrganismProps,
  ref: PrimaryHeroTitleCenterOrganismProps['ref']
) => {
  return (
    <span
      className={cn('flex w-full justify-center lg:justify-evenly', className)}
      ref={ref}
      {...props}
    />
  );
};

export default forwardRef(PrimaryHeroTitleCenterOrganism);
export type { PrimaryHeroTitleCenterOrganismProps };
