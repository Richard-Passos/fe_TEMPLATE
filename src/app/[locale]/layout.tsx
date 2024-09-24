import { ColorSchemeScript } from '@mantine/core';
import { Metadata } from 'next';
import { unstable_setRequestLocale } from 'next-intl/server';
import { PropsWithChildren } from 'react';

import { Height, Theme } from '@/components/atoms';
import {
  CookiesConsent,
  Footer,
  Header,
  Providers
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
      className='overflow-x-clip has-[body[data-scroll-locked]]:overflow-y-hidden'
      lang={locale}
    >
      <head>
        <ColorSchemeScript defaultColorScheme={defaultColorScheme} />
      </head>

      <body className='relative flex min-h-svh flex-col items-center overflow-x-clip'>
        <Providers>
          <Height.Set name='header'>
            <Theme>
              <Header />
            </Theme>
          </Height.Set>

          <Height.Get name='header'>
            <Theme>
              <main className='relative flex w-full max-w-bounds flex-col items-center max-2xl:grow 2xl:min-h-bounds'>
                {children}
              </main>
            </Theme>
          </Height.Get>

          <Theme>
            <Footer />
          </Theme>

          <Theme>
            <CookiesConsent />
          </Theme>
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
