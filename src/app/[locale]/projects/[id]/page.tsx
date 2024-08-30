import { useTranslations } from 'next-intl';
import { unstable_setRequestLocale } from 'next-intl/server';

import { PageTemplate } from '@/components/templates';

import { LayoutParams } from '../../layout';

type SingleProjectPageOwnProps = {};

type SingleProjectPageParams = {
  params: { id: string } & LayoutParams['params'];
};

type SingleProjectPageProps = SingleProjectPageOwnProps &
  SingleProjectPageParams;

const SingleProjectPage = ({
  params: { locale, id }
}: SingleProjectPageProps) => {
  unstable_setRequestLocale(locale);

  console.log(id);

  const t = useTranslations('pages.singleProject');

  return (
    <PageTemplate
      hero={{
        type: 'Secondary',
        theme: 'light',
        id: 'hero',
        data: {
          title: t.rich('hero.title')
        }
      }}
    />
  );
};

const generateMetadata = async ({
  params: { locale, id }
}: SingleProjectPageParams) => {
  /* const t = await getTranslations({
    locale,
    namespace: 'pages.singleProject.metadata'
  });

  return {
    title: t('title'),
    description: t('description'),
    openGraph: {
      title: t('title'),
      description: t('description')
    }
  }; */
};

const generateStaticParams = () =>
  Array.from(Array(10).keys()).map((id) => ({ id: id.toString() }));

export default SingleProjectPage;
export { generateMetadata, generateStaticParams };
export type { SingleProjectPageProps, SingleProjectPageParams };
