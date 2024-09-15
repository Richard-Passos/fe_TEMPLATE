import { defaultLocale } from '@/constants/locales';
import data from '@/data';
import { Locale } from '@/types';

import normKey from './normKey';

const getTranslations = (locale?: Locale['value']) => {
  locale = locale ?? defaultLocale.value;

  return data[normKey(locale) as keyof typeof data];
};

export default getTranslations;
