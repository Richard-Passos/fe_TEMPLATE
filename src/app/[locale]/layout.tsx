import { ColorSchemeScript } from '@mantine/core';
import { getTranslations, unstable_setRequestLocale } from 'next-intl/server';
import { PropsWithChildren } from 'react';

import { SmoothScroll } from '@/components/atoms';
import {
  Footer,
  Header,
  Main,
  Providers,
  Toaster
} from '@/components/organisms';
import { locales } from '@/constants';
import '@/globals.css';
import { defaultColorScheme } from '@/theme';

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
            <Header.Root />

            <Header.State>
              <Main>{children}</Main>
            </Header.State>

            <Footer />

            <Toaster />
          </SmoothScroll>
        </Providers>
      </body>
    </html>
  );
};

const generateMetadata = async ({ params: { locale } }: LayoutParams) => {
  const t = await getTranslations({ locale, namespace: 'personal' });

  return {
    title: {
      default: `${t('name.first')} ${t('name.last')}`,
      template: `%s - ${t('name.first')} ${t('name.last')}`
    },
    description: t('description'),
    icons: {
      icon: t('logo.favicon')
    },
    openGraph: {
      title: `${t('name.first')} ${t('name.last')}`,
      description: t('description')
    }
  };
};

const generateStaticParams = () => locales.map((l) => ({ locale: l.value }));

export default Layout;
export { generateMetadata, generateStaticParams };
export type { LayoutProps, LayoutParams };
