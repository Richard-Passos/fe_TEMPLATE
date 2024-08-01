import { useTranslations } from 'next-intl';
import { forwardRef } from 'react';

import Section, { SectionProps } from '@/components/organisms/Section';
import { cn } from '@/utils';

type HighImpactHeroOrganismOwnProps = {
  namespace: ExtractPrefix<Namespace, `${string}.hero`>;
};

type HighImpactHeroOrganismProps = HighImpactHeroOrganismOwnProps &
  Omit<SectionProps, keyof HighImpactHeroOrganismOwnProps>;

const HighImpactHeroOrganism = (
  { namespace, className, ...props }: HighImpactHeroOrganismProps,
  ref: HighImpactHeroOrganismProps['ref']
) => {
  const t = useTranslations(namespace);

  return (
    <Section
      className={cn(
        'min-h-svh pt-[calc(var(--header-h)+var(--py))]',
        className
      )}
      hasTransition={false}
      ref={ref}
      {...props}
    >
      {t('title')}
    </Section>
  );
};

export default forwardRef(HighImpactHeroOrganism);
export type { HighImpactHeroOrganismProps };
