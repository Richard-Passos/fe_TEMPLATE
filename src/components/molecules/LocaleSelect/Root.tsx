'use client';

import { useLocale } from 'next-intl';
import { useSearchParams } from 'next/navigation';
import { forwardRef } from 'react';

import { Select } from '@/components/atoms';
import { GlobeIcon } from '@/components/atoms/Icon/icons';
import { GlobeIconProps } from '@/components/atoms/Icon/icons/Globe';
import { SelectProps } from '@/components/atoms/Select';
import { isLocale, usePathname, useRouter } from '@/navigation';
import { cn } from '@/utils';

type LocaleSelectMoleculeOwnProps = {
  leftSectionProps?: GlobeIconProps;
};

type LocaleSelectMoleculeProps = LocaleSelectMoleculeOwnProps &
  Omit<SelectProps, keyof LocaleSelectMoleculeOwnProps>;

const LocaleSelectMolecule = (
  { className, leftSectionProps, ...props }: LocaleSelectMoleculeProps,
  ref: LocaleSelectMoleculeProps['ref']
) => {
  const locale = useLocale(),
    router = useRouter(),
    pathname = usePathname(),
    searchParams = useSearchParams();

  return (
    <Select
      allowDeselect={false}
      className={cn('max-w-40 [&_input]:text-ellipsis', className)}
      defaultValue={locale}
      leftSection={
        <GlobeIcon
          {...leftSectionProps}
          className={cn('aspect-square h-2/3', leftSectionProps?.className)}
        />
      }
      leftSectionPointerEvents='none'
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
