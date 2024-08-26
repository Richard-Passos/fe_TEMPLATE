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
      className={cn(
        'flex w-full flex-wrap justify-center gap-x-[.2em] lg:justify-start',
        className
      )}
      ref={ref}
      {...props}
    />
  );
};

export default forwardRef(PrimaryHeroTitleStartOrganism);
export type { PrimaryHeroTitleStartOrganismProps };
