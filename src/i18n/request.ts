import { getRequestConfig } from 'next-intl/server';
import { notFound } from 'next/navigation';

import { isLocale } from '@/utils';

import rich from '../rich';

export default getRequestConfig(async ({ locale }) => {
  if (!isLocale(locale)) notFound();

  return {
    messages: (await import(`@/data/${locale}.json`)).default,
    defaultTranslationValues: rich
  };
});
