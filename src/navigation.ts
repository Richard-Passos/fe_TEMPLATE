import { createSharedPathnamesNavigation } from 'next-intl/navigation';

const locales = ['en', 'pt'] as const;

const defaultLocale = locales[0];

type Locale = (typeof locales)[number];

const isLocale = (value: string): value is Locale => locales.includes(value);

const sharedPathnamesNavigation = createSharedPathnamesNavigation({ locales });

export { locales, defaultLocale, isLocale };
export const { Link, redirect, usePathname, useRouter } =
  sharedPathnamesNavigation;
export type { Locale };
