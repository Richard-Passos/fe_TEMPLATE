import { useTranslations } from 'next-intl';
import { ComponentPropsWithRef, Suspense, forwardRef } from 'react';

import { Divider } from '@/components/atoms';
import LocaleSelect from '@/components/molecules/LocaleSelect';
import Logo from '@/components/organisms/Logo';
import { locales } from '@/navigation';
import { cn } from '@/utils';

import HeaderMenu from './Menu';
import Nav from './Nav';
import Set from './Set';

type HeaderOrganismOwnProps = {};

type HeaderOrganismProps = HeaderOrganismOwnProps &
  Omit<ComponentPropsWithRef<'header'>, keyof HeaderOrganismOwnProps>;

const HeaderOrganism = (
  { className, ...props }: HeaderOrganismProps,
  ref: HeaderOrganismProps['ref']
) => {
  const namespace: Namespace = 'header';

  const t = useTranslations(namespace),
    gt = useTranslations();

  const shortNavKeys = ['home', 'work', 'about', 'contact'] as const;

  const items = shortNavKeys.map((key) => ({
    href: t(`nav.short.${key}.href`),
    label: t(`nav.short.${key}.label`)
  }));

  return (
    <Set>
      <header
        className={cn(
          'absolute z-10 flex w-full max-w-bounds flex-wrap items-center justify-between px-[5%] py-xl',
          className
        )}
        ref={ref}
        {...props}
      >
        <Logo
          className='-ml-[--button-padding-x]'
          variant='primary'
        />

        <div className='flex items-center gap-xs max-md:hidden'>
          <Nav items={items} />

          <Suspense>
            <LocaleSelect
              aria-label={t('locale.label')}
              data={locales.map((key) => ({
                value: key,
                label: gt(`locales.${key}.label`)
              }))}
            />
          </Suspense>
        </div>

        <HeaderMenu namespace={`${namespace}.menu`} />
      </header>
    </Set>
  );
};

export default forwardRef(HeaderOrganism);
export type { HeaderOrganismProps };
