import { createSharedPathnamesNavigation } from 'next-intl/navigation';

import { locales } from '@/constants';

const sharedPathnamesNavigation = createSharedPathnamesNavigation({
  locales: locales.map((l) => l.value)
});

export const { Link, redirect, usePathname, useRouter } =
  sharedPathnamesNavigation;
