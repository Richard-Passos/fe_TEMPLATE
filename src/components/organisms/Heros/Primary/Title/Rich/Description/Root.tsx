import { ComponentPropsWithRef, forwardRef } from 'react';

import { cn } from '@/utils';

type PrimaryHeroTitleDescriptionOrganismOwnProps = {};

type PrimaryHeroTitleDescriptionOrganismProps =
  PrimaryHeroTitleDescriptionOrganismOwnProps &
    Omit<
      ComponentPropsWithRef<'span'>,
      keyof PrimaryHeroTitleDescriptionOrganismOwnProps
    >;

const PrimaryHeroTitleDescriptionOrganism = (
  { className, ...props }: PrimaryHeroTitleDescriptionOrganismProps,
  ref: PrimaryHeroTitleDescriptionOrganismProps['ref']
) => {
  return (
    <span
      className={cn(
        'mt-auto max-w-sm text-start font-display text-[.14em]/normal font-medium normal-case -translate-y-3.5 max-lg:hidden',
        className
      )}
      ref={ref}
      {...props}
    />
  );
};

export default forwardRef(PrimaryHeroTitleDescriptionOrganism);
export type { PrimaryHeroTitleDescriptionOrganismProps };
