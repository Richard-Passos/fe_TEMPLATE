import { useTranslations } from 'next-intl';
import { ComponentPropsWithRef, forwardRef } from 'react';

import { cn } from '@/utils';

type HighImpactHeroOrganismOwnProps = {
  namespace: ExtractPrefix<Namespace, `${string}.hero`>;
};

type HighImpactHeroOrganismProps = HighImpactHeroOrganismOwnProps &
  Omit<ComponentPropsWithRef<'section'>, keyof HighImpactHeroOrganismOwnProps>;

const HighImpactHeroOrganism = (
  { namespace, className, ...props }: HighImpactHeroOrganismProps,
  ref: HighImpactHeroOrganismProps['ref']
) => {
  const t = useTranslations(namespace);

  return (
    <section
      className={cn(
        'flex min-h-svh w-full flex-col items-center pb-[--py] pt-[calc(var(--header-h)+var(--py))] [--py:--spacing-xl] 2xl:min-h-bounds',
        className
      )}
      ref={ref}
      {...props}
    >
      {t('title')}
    </section>
  );
};

export default forwardRef(HighImpactHeroOrganism);
export type { HighImpactHeroOrganismProps };
