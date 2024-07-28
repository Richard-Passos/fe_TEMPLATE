import { getTranslations, unstable_setRequestLocale } from 'next-intl/server';
import { forwardRef } from 'react';

import { AboutTemplate } from '@/components/templates';

import { LayoutParams } from '../layout';

type AboutPageOwnProps = {};

type AboutPageParams = LayoutParams;

type AboutPageProps = AboutPageOwnProps & AboutPageParams;

const AboutPage = ({ params: { locale } }: AboutPageProps) => {
  unstable_setRequestLocale(locale);

  return <AboutTemplate namespace='pages.about' />;
};

const generateMetadata = async ({ params: { locale } }: AboutPageParams) => {
  const t = await getTranslations({
    locale,
    namespace: 'pages.about.metadata'
  });

  return {
    title: t('title'),
    description: t('description'),
    openGraph: {
      title: t('title'),
      description: t('description')
    }
  };
};

export default forwardRef(AboutPage);
export { generateMetadata };
export type { AboutPageProps, AboutPageParams };
