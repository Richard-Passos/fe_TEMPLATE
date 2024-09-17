import { Metadata } from 'next';
import { unstable_setRequestLocale } from 'next-intl/server';
import { notFound } from 'next/navigation';

import { SingleProjectTemplate } from '@/components/templates';
import { entries, normId } from '@/utils';
import { pagesApi, projectsApi } from '@/utils/actions';

import { LayoutParams } from '../../layout';

type SingleProjectPageOwnProps = {};

type SingleProjectPageParams = {
  params: { slug: string } & LayoutParams['params'];
};

type SingleProjectPageProps = SingleProjectPageOwnProps &
  SingleProjectPageParams;

const SingleProjectPage = async ({
  params: { slug, locale }
}: SingleProjectPageProps) => {
  unstable_setRequestLocale(locale);

  slug = normId(slug);

  const res = await pagesApi.getSingleProject({ slug, locale });

  if (!res.ok) return notFound();

  const page = res.data;

  return (
    <SingleProjectTemplate
      blocks={
        entries(page.blocks).map(([key, value]) => ({
          id: normId(key),
          type: key,
          ...value
        })) as any
      }
      hero={page.hero}
    />
  );
};

const generateMetadata = async ({
  params: { slug, locale }
}: SingleProjectPageParams): Promise<Metadata> => {
  const res = await pagesApi.getSingleProject({ slug, locale });

  if (!res.ok) return notFound();

  const { metadata } = res.data;

  return metadata;
};

const generateStaticParams = async ({ params: { locale } }: LayoutParams) => {
  const res = await projectsApi.get({ locale, isSelected: true });

  const projects = res.ok ? res.data : [];

  return projects.map((d) => ({ slug: d.slug }));
};

export default SingleProjectPage;
export { generateMetadata, generateStaticParams };
export type { SingleProjectPageProps, SingleProjectPageParams };
