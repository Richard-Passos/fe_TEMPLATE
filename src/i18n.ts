import { getRequestConfig } from 'next-intl/server';
import { notFound } from 'next/navigation';

import { locales } from '@/constants';
import rich from '@/rich';

const i18nConfig = getRequestConfig(async ({ locale }) => {
  if (!locales.some((l) => l.value === locale)) notFound();

  return {
    messages: (await import(`@/data/${locale}.json`))?.default,
    defaultTranslationValues: rich
  };
});

export default i18nConfig;
