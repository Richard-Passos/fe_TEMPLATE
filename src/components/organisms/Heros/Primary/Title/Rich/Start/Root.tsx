import { ComponentPropsWithRef, forwardRef } from 'react';

import { cn } from '@/utils';

type PrimaryHeroTitleStartOrganismOwnProps = {};

type PrimaryHeroTitleStartOrganismProps =
  PrimaryHeroTitleStartOrganismOwnProps &
    Omit<
      ComponentPropsWithRef<'span'>,
      keyof PrimaryHeroTitleStartOrganismOwnProps
    >;

const PrimaryHeroTitleStartOrganism = (
  { className, ...props }: PrimaryHeroTitleStartOrganismProps,
  ref: PrimaryHeroTitleStartOrganismProps['ref']
) => {
  return (
    <span
      className={cn('lg:mr-auto', className)}
      ref={ref}
      {...props}
    />
  );
};

export default forwardRef(PrimaryHeroTitleStartOrganism);
export type { PrimaryHeroTitleStartOrganismProps };
