'use client';

import { useLocale } from 'next-intl';
import { forwardRef } from 'react';

import { Select } from '@/components/atoms';
import { GlobeIcon } from '@/components/atoms/Icon/icons';
import { GlobeIconProps } from '@/components/atoms/Icon/icons/Globe';
import { SelectProps } from '@/components/atoms/Select';
import { usePathname, useRouter } from '@/i18n/routing';
import { cn, isLocale } from '@/utils';

type LocaleSelectMoleculeOwnProps = {
  leftSectionProps?: Partial<GlobeIconProps>;
};

type LocaleSelectMoleculeProps = LocaleSelectMoleculeOwnProps &
  Omit<SelectProps, keyof LocaleSelectMoleculeOwnProps>;

const LocaleSelectMolecule = (
  { className, leftSectionProps, ...props }: LocaleSelectMoleculeProps,
  ref: LocaleSelectMoleculeProps['ref']
) => {
  const locale = useLocale(),
    router = useRouter(),
    pathname = usePathname();

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
        if (!isLocale(locale)) return;

        router.replace(`${pathname}`, { locale });

        props.onChange?.(locale, options);
      }}
    />
  );
};

export default forwardRef(LocaleSelectMolecule);
export type { LocaleSelectMoleculeProps };
