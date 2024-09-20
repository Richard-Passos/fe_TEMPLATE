import { ColorSchemeScript } from '@mantine/core';
import { Analytics } from '@vercel/analytics/react';
import { SpeedInsights } from '@vercel/speed-insights/next';
import { Metadata } from 'next';
import { unstable_setRequestLocale } from 'next-intl/server';
import { PropsWithChildren } from 'react';

import { Height, SmoothScroll } from '@/components/atoms';
import {
  CookiesConsent,
  Footer,
  Header,
  Providers,
  Toaster
} from '@/components/organisms';
import { baseUrl, locales } from '@/constants';
import '@/styles/globals.css';
import { defaultColorScheme } from '@/styles/theme';
import { Locale } from '@/types';
import { personalApi } from '@/utils/actions';

type LayoutOwnProps = PropsWithChildren<{}>;

type LayoutParams = { params: { locale: Locale['value'] } };

type LayoutProps = LayoutOwnProps & LayoutParams;

const Layout = ({ params: { locale }, children }: LayoutProps) => {
  unstable_setRequestLocale(locale);

  return (
    <html
      className={`overflow-x-clip has-[body[data-scroll-locked]]:overflow-y-hidden`}
      lang={locale}
    >
      <head>
        <ColorSchemeScript defaultColorScheme={defaultColorScheme} />
      </head>

      <body
        className={`relative flex min-h-svh flex-col items-center overflow-x-clip`}
      >
        <Providers>
          <SmoothScroll>
            <Height.Set name='header'>
              <Header />
            </Height.Set>

            <Height.Get name={['header', 'document']}>
              <main
                className={`relative flex w-full max-w-bounds flex-col items-center max-2xl:grow 2xl:min-h-bounds`}
              >
                {children}
              </main>
            </Height.Get>

            <Height.Get name='document'>
              <Footer />
            </Height.Get>

            <CookiesConsent />

            <Toaster />

            <Analytics />
            <SpeedInsights />
          </SmoothScroll>
        </Providers>
      </body>
    </html>
  );
};

const generateMetadata = async ({
  params: { locale }
}: LayoutParams): Promise<Metadata> => {
  const res = await personalApi.get({ locale });

  if (!res.ok) return {};

  const personal = res.data;

  return {
    title: {
      default: personal.title,
      template: `%s — ${personal.name.first} ${personal.name.last}`
    },
    description: personal.description,
    keywords: personal.description,
    authors: personal.authors,
    metadataBase: new URL(baseUrl),
    openGraph: {
      title: personal.title,
      description: personal.description,
      url: baseUrl,
      siteName: `${personal.name.first} ${personal.name.last}`,
      locale: locale,
      type: 'website'
    }
  };
};

const generateStaticParams = () => locales.map((l) => ({ locale: l.value }));

export default Layout;
export { generateMetadata, generateStaticParams };
export type { LayoutProps, LayoutParams };
