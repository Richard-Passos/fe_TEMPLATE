import { ComponentPropsWithRef, forwardRef } from 'react';

import { cn } from '@/utils';

type LowImpactHeroOrganismOwnProps = {};

type LowImpactHeroOrganismProps = LowImpactHeroOrganismOwnProps &
  Omit<ComponentPropsWithRef<'div'>, keyof LowImpactHeroOrganismOwnProps>;

const LowImpactHeroOrganism = (
  { className, ...props }: LowImpactHeroOrganismProps,
  ref: LowImpactHeroOrganismProps['ref']
) => {
  return (
    <section
      className={cn(
        'flex min-h-dvh flex-col items-center justify-center pb-[--py] pt-[calc(var(--header-h)+var(--py))] [--py:--spacing-xl] max-2xl:min-h-bounds',
        className
      )}
      ref={ref}
      {...props}
    />
  );
};

export default forwardRef(LowImpactHeroOrganism);
export type { LowImpactHeroOrganismProps };
