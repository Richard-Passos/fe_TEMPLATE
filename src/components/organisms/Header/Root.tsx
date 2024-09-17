import { getLocale } from 'next-intl/server';
import { ComponentPropsWithRef, forwardRef } from 'react';

import LocaleSelect from '@/components/molecules/LocaleSelect';
import Logo from '@/components/organisms/Logo';
import { defaultPages, locales } from '@/constants';
import { Locale } from '@/types';
import { cn } from '@/utils';
import { headerApi, pagesApi } from '@/utils/actions';

import HeaderMenu from './Menu';
import HeaderNav, { HeaderNavProps } from './Nav';
import HeaderTheme from './Theme';

type HeaderOrganismOwnProps = {};

type HeaderOrganismProps = HeaderOrganismOwnProps &
  Omit<ComponentPropsWithRef<'header'>, keyof HeaderOrganismOwnProps>;

const HeaderOrganism = async (
  { className, ...props }: HeaderOrganismProps,
  ref: HeaderOrganismProps['ref']
) => {
  const locale = (await getLocale()) as Locale['value'];

  const [headerRes, pagesRes] = await Promise.all([
    headerApi.get({ locale }),
    pagesApi.get({ locale, isSelected: true })
  ]);

  if (!headerRes.ok) return null;

  const header = headerRes.data;

  const navItem: HeaderNavProps['items'] = pagesRes.ok
    ? pagesRes.data.map((p) => ({
        href: `/${p.slug === defaultPages.home ? '' : p.slug}`,
        label: `${p.label}`
      }))
    : [];

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
          <HeaderNav items={navItem} />

          <LocaleSelect
            aria-label={header.locale.label}
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
