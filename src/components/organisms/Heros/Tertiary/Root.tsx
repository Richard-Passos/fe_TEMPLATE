import { ComponentPropsWithRef, forwardRef } from 'react';

import { cn } from '@/utils';

type TertiaryHeroOrganismOwnProps = {};

type TertiaryHeroOrganismProps = TertiaryHeroOrganismOwnProps &
  Omit<ComponentPropsWithRef<'div'>, keyof TertiaryHeroOrganismOwnProps>;

const TertiaryHeroOrganism = (
  { className, ...props }: TertiaryHeroOrganismProps,
  ref: TertiaryHeroOrganismProps['ref']
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

export default forwardRef(TertiaryHeroOrganism);
export type { TertiaryHeroOrganismProps };
