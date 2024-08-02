import { useTranslations } from 'next-intl';
import { ReactNode, forwardRef } from 'react';

import { Title } from '@/components/atoms';
import { TitleProps } from '@/components/atoms/Title';
import { cn } from '@/utils';

type HighImpactHeroTitleOrganismOwnProps = {
  namespace: ExtractPrefix<Namespace, `${string}.hero`>;
};

type HighImpactHeroTitleOrganismProps = HighImpactHeroTitleOrganismOwnProps &
  Omit<TitleProps, keyof HighImpactHeroTitleOrganismOwnProps>;

const HighImpactHeroTitleOrganism = (
  { namespace, className, ...props }: HighImpactHeroTitleOrganismProps,
  ref: HighImpactHeroTitleOrganismProps['ref']
) => {
  const t = useTranslations(namespace);

  const Start = (chunks: ReactNode) => (
      <span className='lg:mr-auto'>{chunks}</span>
    ),
    Center = (chunks: ReactNode) => (
      <span className='flex w-full justify-center lg:justify-evenly'>
        {chunks}
      </span>
    ),
    End = (chunks: ReactNode) => <span className='lg:ml-auto'>{chunks}</span>,
    Description = () => (
      <span className='mt-auto max-w-sm -translate-y-3.5 text-start text-[.14em]/tight font-normal normal-case tracking-normal max-lg:hidden'>
        {t('description')}
      </span>
    );

  return (
    <Title
      aria-label={t('title.label')}
      className={cn(
        'flex w-full flex-col items-center text-center font-black leading-none sm:[font-size:clamp(5.625rem,2.5481rem+4.8077vw,6.875rem)] lg:px-[--inset]',
        className
      )}
      order={1}
      ref={ref}
      {...props}
    >
      {t.rich('title.rich', {
        Start,
        Center,
        End,
        Description
      })}
    </Title>
  );
};

export default forwardRef(HighImpactHeroTitleOrganism);
export type { HighImpactHeroTitleOrganismProps };
