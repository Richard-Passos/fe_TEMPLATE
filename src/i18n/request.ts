import { getRequestConfig } from 'next-intl/server';
import { notFound } from 'next/navigation';

import { locales } from '@/constants';
import { Locale } from '@/types';
import { isType } from '@/utils';

export default getRequestConfig(async ({ locale }) => {
  if (
    !isType<Locale['value']>(
      locales.some((d) => d.value === locale),
      locale
    )
  )
    notFound();

  return {
    messages: {}
  };
});
