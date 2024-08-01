import { ColorSchemeScript } from '@mantine/core';
import { getTranslations, unstable_setRequestLocale } from 'next-intl/server';
import { PropsWithChildren } from 'react';

import { SmoothScroll } from '@/components/atoms';
import { Footer, Header, Main, Providers } from '@/components/organisms';
import '@/globals.css';
import { locales } from '@/navigation';
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

      <body className='relative flex min-h-dvh flex-col items-center overflow-x-clip'>
        <Providers>
          <SmoothScroll>
            <Header.Root />

            <Header.State>
              <Main>{children}</Main>
            </Header.State>

            <Footer />
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
      default: t('name'),
      template: `%s - ${t('name')}`
    },
    description: t('description'),
    icons: {
      icon: t('logo.favicon')
    },
    openGraph: {
      title: t('name'),
      description: t('description')
    }
  };
};

const generateStaticParams = () => locales.map((locale) => ({ locale }));

export default Layout;
export { generateMetadata, generateStaticParams };
export type { LayoutProps, LayoutParams };
