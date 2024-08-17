import { getRequestConfig } from 'next-intl/server';
import { notFound } from 'next/navigation';

import rich from '@/rich';

import { isLocale } from './utils';

const i18nConfig = getRequestConfig(async ({ locale }) => {
  if (!isLocale(locale)) notFound();

  return {
    messages: (await import(`@/data/${locale}.json`))?.default,
    defaultTranslationValues: rich
  };
});

export default i18nConfig;
