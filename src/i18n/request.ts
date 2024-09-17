import { getRequestConfig } from 'next-intl/server';
import { notFound } from 'next/navigation';

import { isLocale } from '@/utils';

export default getRequestConfig(async ({ locale }) => {
  if (!isLocale(locale)) notFound();

  return {
    messages: {}
  };
});
