import { locales } from '@/constants';

const isLocale = (
  value?: string | null
): value is (typeof locales)[number]['value'] =>
  locales.some((l) => l.value === value);

export default isLocale;
