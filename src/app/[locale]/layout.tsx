import { ColorSchemeScript } from '@mantine/core';
import { Analytics } from '@vercel/analytics/react';
import { SpeedInsights } from '@vercel/speed-insights/next';
import { Metadata } from 'next';
import {
  getMessages,
  getTranslations,
  unstable_setRequestLocale
} from 'next-intl/server';
import { PropsWithChildren } from 'react';

import { Height, SmoothScroll } from '@/components/atoms';
import { Footer, Header, Providers, Toaster } from '@/components/organisms';
import { locales } from '@/constants';
import '@/styles/globals.css';
import { defaultColorScheme } from '@/styles/theme';
import { baseUrl, values } from '@/utils';

type LayoutOwnProps = PropsWithChildren<{}>;

type LayoutParams = { params: { locale: string } };

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
          <SmoothScroll>
            <Height.Set name='header'>
              <Header />
            </Height.Set>

            <Height.Get name={['header', 'document']}>
              <main className='relative flex w-full max-w-bounds flex-col items-center max-2xl:grow 2xl:min-h-bounds'>
                {children}
              </main>
            </Height.Get>

            <Height.Get name='document'>
              <Footer />
            </Height.Get>

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
  const t = await getTranslations({ locale, namespace: 'personal' }),
    messages = (await getMessages()) as unknown as IntlMessages;

  return {
    title: {
      default: t('title', {
        name: `${t('name.first')} ${t('name.last')}`
      }),
      template: `%s — ${t('name.first')} ${t('name.last')}`
    },
    description: t('description', { country: t('location.country') }),
    keywords: t('keywords'),
    authors: values(messages.personal.authors),
    metadataBase: new URL(baseUrl),
    openGraph: {
      title: t('title', {
        name: `${t('name.first')} ${t('name.last')}`
      }),
      description: t('description', { country: t('location.country') }),
      url: baseUrl,
      siteName: `${t('name.first')} ${t('name.last')}`,
      locale: locale,
      type: 'website'
    }
  };
};

const generateStaticParams = () => locales.map((l) => ({ locale: l.value }));

export default Layout;
export { generateMetadata, generateStaticParams };
export type { LayoutProps, LayoutParams };
