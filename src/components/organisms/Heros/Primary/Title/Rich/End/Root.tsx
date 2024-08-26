import { ComponentPropsWithRef, forwardRef } from 'react';

import { cn } from '@/utils';

type PrimaryHeroTitleEndOrganismOwnProps = {};

type PrimaryHeroTitleEndOrganismProps = PrimaryHeroTitleEndOrganismOwnProps &
  Omit<
    ComponentPropsWithRef<'span'>,
    keyof PrimaryHeroTitleEndOrganismOwnProps
  >;

const PrimaryHeroTitleEndOrganism = (
  { className, ...props }: PrimaryHeroTitleEndOrganismProps,
  ref: PrimaryHeroTitleEndOrganismProps['ref']
) => {
  return (
    <span
      className={cn(
        'flex w-full justify-center gap-[.2em] lg:justify-end',
        className
      )}
      ref={ref}
      {...props}
    />
  );
};

export default forwardRef(PrimaryHeroTitleEndOrganism);
export type { PrimaryHeroTitleEndOrganismProps };
