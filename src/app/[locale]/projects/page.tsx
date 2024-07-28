import { getTranslations, unstable_setRequestLocale } from 'next-intl/server';

import { ProjectsTemplate } from '@/components/templates';

import { LayoutParams } from '../layout';

type ProjectsPageOwnProps = {};

type ProjectsPageParams = LayoutParams;

type ProjectsPageProps = ProjectsPageOwnProps & ProjectsPageParams;

const ProjectsPage = ({ params: { locale } }: ProjectsPageProps) => {
  unstable_setRequestLocale(locale);

  return <ProjectsTemplate namespace='pages.projects' />;
};

const generateMetadata = async ({ params: { locale } }: ProjectsPageParams) => {
  const t = await getTranslations({
    locale,
    namespace: 'pages.projects.metadata'
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

export default ProjectsPage;
export { generateMetadata };
export type { ProjectsPageProps, ProjectsPageParams };
