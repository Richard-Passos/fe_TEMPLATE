import { useMessages, useTranslations } from 'next-intl';
import { ComponentPropsWithRef, forwardRef } from 'react';

import LocaleSelect from '@/components/molecules/LocaleSelect';
import Logo from '@/components/organisms/Logo';
import { locales } from '@/constants';
import { cn, keys } from '@/utils';

import HeaderMenu from './Menu';
import Nav from './Nav';
import HeaderTheme from './Theme';

type HeaderOrganismOwnProps = {};

type HeaderOrganismProps = HeaderOrganismOwnProps &
  Omit<ComponentPropsWithRef<'header'>, keyof HeaderOrganismOwnProps>;

const HeaderOrganism = (
  { className, ...props }: HeaderOrganismProps,
  ref: HeaderOrganismProps['ref']
) => {
  const t = useTranslations('header'),
    messages = useMessages() as unknown as IntlMessages;

  const items = keys(messages.header.nav).map((key) => ({
    href: t(`nav.${key}.href`),
    label: t(`nav.${key}.label`)
  }));

  return (
    <HeaderTheme>
      <header
        className={cn(
          'absolute z-10 flex w-full max-w-bounds flex-wrap items-center justify-between px-[6%] py-lg sm:px-[4%] sm:py-xl',
          className
        )}
        ref={ref}
        {...props}
      >
        <Logo className='-ml-[--button-padding-x]' />

        <div className='flex items-center gap-xs max-md:hidden'>
          <Nav items={items} />

          <LocaleSelect
            aria-label={t('locale.label')}
            data={locales}
          />
        </div>

        <HeaderMenu />
      </header>
    </HeaderTheme>
  );
};

export default forwardRef(HeaderOrganism);
export type { HeaderOrganismProps };
