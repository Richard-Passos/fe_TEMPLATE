import { getRequestConfig } from 'next-intl/server';
import { notFound } from 'next/navigation';

import rich from '@/rich';
import { isLocale } from '@/utils';

export default getRequestConfig(async ({ locale }) => {
  if (!isLocale(locale)) notFound();

  return {
    messages: (await import(`@/data/${locale}/root.json`)).default,
    defaultTranslationValues: rich
  };
});
