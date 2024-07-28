import { ComponentPropsWithRef, forwardRef } from 'react';

import { cn } from '@/utils';

type MediumImpactHeroOrganismOwnProps = {};

type MediumImpactHeroOrganismProps = MediumImpactHeroOrganismOwnProps &
  Omit<ComponentPropsWithRef<'div'>, keyof MediumImpactHeroOrganismOwnProps>;

const MediumImpactHeroOrganism = (
  { className, ...props }: MediumImpactHeroOrganismProps,
  ref: MediumImpactHeroOrganismProps['ref']
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

export default forwardRef(MediumImpactHeroOrganism);
export type { MediumImpactHeroOrganismProps };
