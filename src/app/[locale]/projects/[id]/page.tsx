import { Metadata } from 'next';
import { getTranslations, unstable_setRequestLocale } from 'next-intl/server';
import { notFound } from 'next/navigation';

import { SingleProjectResponse } from '@/app/api/projects/[id]/route';
import { ProjectsResponse } from '@/app/api/projects/route';
import { SingleProjectTemplate } from '@/components/templates';
import { baseUrl, entries, request, values } from '@/utils';

import { LayoutParams } from '../../layout';

type SingleProjectPageOwnProps = {};

type SingleProjectPageParams = {
  params: { id: string } & LayoutParams['params'];
};

type SingleProjectPageProps = SingleProjectPageOwnProps &
  SingleProjectPageParams;

const SingleProjectPage = async ({
  params: { locale, id }
}: SingleProjectPageProps) => {
  unstable_setRequestLocale(locale);

  const [t, data] = await Promise.all([
    getTranslations('pages.singleProject'),
    request<SingleProjectResponse>(`/api/projects/${id}?locale=${locale}`)
  ]);

  if (!data.ok) return;

  const project = data.data;

  const [prevData, nextData] = await Promise.all([
    request<SingleProjectResponse>(
      `/api/projects/${data.meta.adjacentIds.prev}?locale=${locale}`
    ),
    request<SingleProjectResponse>(
      `/api/projects/${data.meta.adjacentIds.next}?locale=${locale}`
    )
  ]);

  const prevProject = prevData.ok ? prevData.data : undefined,
    nextProject = nextData.ok ? nextData.data : undefined;

  return (
    <SingleProjectTemplate
      blocks={{
        images: {
          theme: 'dark',
          id: 'images',
          hasTransition: false,
          data: {
            description: t.rich('blocks.images.description'),
            items: entries(project.images).map(([key, data]) => ({
              id: key,
              src: data.src,
              alt: data.alt
            }))
          }
        },
        adjacents: {
          theme: 'dark',
          id: 'adjacents',
          hasTransition: false,
          data: {
            prev: {
              label: t('blocks.adjacents.prev.label'),
              name: prevProject?.title,
              href: `/projects/${prevProject?.slug}`
            },
            next: {
              label: t('blocks.adjacents.next.label'),
              name: nextProject?.title,
              href: `/projects/${nextProject?.slug}`
            }
          }
        }
      }}
      hero={{
        theme: 'dark',
        id: 'hero',
        data: {
          title: project.title,
          description: project.description,
          subtitle: t('hero.subtitle', {
            roles: values(project.roles)
              .map((w) => w.toLowerCase())
              .join(' & '),
            year: project.year
          }),
          image: {
            src: project.banner.src,
            alt: project.banner.alt
          },
          action: {
            label: t('hero.action.label'),
            href: project.href
          }
        }
      }}
    />
  );
};

const generateMetadata = async ({
  params: { locale, id }
}: SingleProjectPageParams): Promise<Metadata> => {
  const data = await request<SingleProjectResponse>(
    `/api/projects/${id}?locale=${locale}`
  );

  if (!data.ok) return notFound();

  const project = data.data;

  return {
    title: project.title,
    description: project.description,
    openGraph: {
      title: project.title,
      description: project.description,
      url: `${baseUrl}/projects/${project.slug}`,
      images: [
        project.thumbnail.src,
        ...values(project.images ?? {}).map((d) => d.src)
      ]
    }
  };
};

const generateStaticParams = async ({
  params: { locale }
}: SingleProjectPageParams) => {
  const data = await request<ProjectsResponse>(
    `/api/projects?locale=${locale}&is-selected=true`
  );

  if (!data.ok) return [];

  const projects = data.data;

  return projects.map(({ slug }) => ({ id: slug }));
};

export default SingleProjectPage;
export { generateMetadata, generateStaticParams };
export type { SingleProjectPageProps, SingleProjectPageParams };
