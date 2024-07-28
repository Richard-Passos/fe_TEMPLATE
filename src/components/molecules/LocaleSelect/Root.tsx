'use client';

import { useLocale } from 'next-intl';
import { useSearchParams } from 'next/navigation';
import { forwardRef } from 'react';

import { Select } from '@/components/atoms';
import type { SelectProps } from '@/components/atoms/Select';
import { isLocale, usePathname, useRouter } from '@/navigation';

type LocaleSelectMoleculeOwnProps = {};

type LocaleSelectMoleculeProps = LocaleSelectMoleculeOwnProps &
  Omit<SelectProps, keyof LocaleSelectMoleculeOwnProps>;

const LocaleSelectMolecule = (
  props: LocaleSelectMoleculeProps,
  ref: LocaleSelectMoleculeProps['ref']
) => {
  const locale = useLocale(),
    router = useRouter(),
    pathname = usePathname(),
    searchParams = useSearchParams();

  return (
    <Select
      allowDeselect={false}
      defaultValue={locale}
      ref={ref}
      {...props}
      onChange={(locale, options) => {
        if (!locale || !isLocale(locale)) return;

        router.replace(`${pathname}?${searchParams}`, { locale });

        props.onChange?.(locale, options);
      }}
    />
  );
};

export default forwardRef(LocaleSelectMolecule);
export type { LocaleSelectMoleculeProps };
