import createMiddleware from 'next-intl/middleware';

import { defaultLocale, locales } from '@/navigation';

const middleware = createMiddleware({
  locales,
  defaultLocale
});

export default middleware;
export const config = {
  matcher: ['/((?!api|_next|_vercel|.*\\..*).*)']
};
