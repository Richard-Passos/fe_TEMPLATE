import { getRequestConfig } from 'next-intl/server';
import { notFound } from 'next/navigation';

import { isLocale } from '@/navigation';
import rich from '@/rich';

const i18nConfig = getRequestConfig(async ({ locale }) => {
  if (!isLocale(locale)) notFound();

  return {
    messages: (await import(`@/data/${locale}.json`))?.default,
    defaultTranslationValues: rich
  };
});

export default i18nConfig;
