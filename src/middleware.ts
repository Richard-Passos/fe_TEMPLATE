import createMiddleware from 'next-intl/middleware';

import locales, { defaultLocale } from '@/constants/locales';

const middleware = createMiddleware({
  locales: locales.map((l) => l.value),
  defaultLocale: defaultLocale.value
});

export default middleware;
export const config = {
  matcher: ['/((?!api|_next|_vercel|.*\\..*).*)']
};
