import { getTranslations, unstable_setRequestLocale } from 'next-intl/server';

import { WorkTemplate } from '@/components/templates';

import { LayoutParams } from '../layout';

type WorkPageOwnProps = {};

type WorkPageParams = LayoutParams;

type WorkPageProps = WorkPageOwnProps & WorkPageParams;

const WorkPage = ({ params: { locale } }: WorkPageProps) => {
  unstable_setRequestLocale(locale);

  return <WorkTemplate namespace='pages.work' />;
};

const generateMetadata = async ({ params: { locale } }: WorkPageParams) => {
  const t = await getTranslations({
    locale,
    namespace: 'pages.work.metadata'
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

export default WorkPage;
export { generateMetadata };
export type { WorkPageProps, WorkPageParams };
