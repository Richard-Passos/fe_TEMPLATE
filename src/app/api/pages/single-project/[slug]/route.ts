import { NextRequest, NextResponse } from 'next/server';

import { defaultPages } from '@/constants';
import { defaultLocale } from '@/constants/locales';
import { Locale, SingleProjectPage } from '@/types';
import { baseUrl, getTranslations, isType, normId } from '@/utils';

type Params = {
  slug: string;
};

type SearchParams = {
  locale: Locale['value'];
};

const DEFAULT_PARAMS: SearchParams = {
  locale: defaultLocale.value
};

type SingleProjectPageResponse =
  | { ok: false; status: 404; message: string }
  | { ok: false; status: 500; message: string }
  | {
      ok: true;
      status: 200;
      data: SingleProjectPage;
      meta: {
        adjacentIds: {
          prev?: string;
          next?: string;
        };
      };
    };

const GET = async (
  request: NextRequest,
  { params: { slug } }: { params: Params }
): Promise<ReturnType<typeof NextResponse.json<SingleProjectPageResponse>>> => {
  try {
    const { searchParams } = request.nextUrl;

    const params: { [K in keyof SearchParams]: string | null } = {
      locale: searchParams.get('locale')
    };

    slug = normId(slug);

    const locale = isType<SearchParams['locale']>(params.locale)
      ? params.locale
      : DEFAULT_PARAMS.locale;

    const t = getTranslations(locale);

    const projects = await t.projects();

    let projectIndex = projects.findIndex((d) => normId(d.slug) === slug);

    if (projectIndex === -1)
      return NextResponse.json({
        ok: false,
        status: 404,
        message: 'Project not found!'
      });

    const pages = await t.pages();

    const page = pages.find((d) => d.slug === defaultPages.singleProject) as
      | SingleProjectPage
      | undefined;

    if (!page)
      return NextResponse.json({
        ok: false,
        status: 404,
        message: 'Page not found!'
      });

    const prevId = projects.at(projectIndex > 0 ? projectIndex - 1 : -1)?.slug,
      nextId = projects.at(
        projectIndex < projects.length - 1 ? projectIndex + 1 : 0
      )?.slug;

    const project = projects[projectIndex]!,
      prevProject = projects.find((d) => d.slug === prevId),
      nextProject = projects.find((d) => d.slug === nextId),
      adjacentIds = {
        prev: prevId,
        next: nextId
      };

    const data: SingleProjectPage = {
      ...page,
      hero: {
        ...page.hero,
        data: {
          title: project.title,
          description: project.description,
          subtitle: `${project.roles.join(' & ')} — ${project.year}`,
          action: {
            href: project.href,
            label: page.hero.data.action.label
          },
          image: {
            src: project.banner.src,
            alt: project.banner.alt
          }
        }
      },
      blocks: {
        Images: {
          ...page.blocks.Images,
          data: {
            ...page.blocks.Images?.data,
            items: project.images ?? []
          }
        },
        Adjacents: {
          ...page.blocks.Adjacents,
          data: {
            prev: {
              label: '',
              ...page.blocks.Adjacents?.data?.prev,
              href: prevProject?.href ?? '',
              name: prevProject?.title
            },
            next: {
              label: '',
              ...page.blocks.Adjacents?.data?.next,
              href: nextProject?.href ?? '',
              name: nextProject?.title
            }
          }
        }
      },
      metadata: {
        title: project.title,
        description: project.description,
        openGraph: {
          title: project.title,
          description: project.description,
          url: `${baseUrl}/${defaultPages.projects}/${project.slug}`,
          locale: locale,
          type: 'website',
          images: [
            project.banner.src,
            ...(project.images?.map((d) => d.src) ?? [])
          ]
        }
      }
    };

    return NextResponse.json({
      ok: true,
      status: 200,
      data,
      meta: { adjacentIds }
    });
  } catch {
    return NextResponse.json({
      ok: false,
      status: 500,
      message: 'Something went wrong!'
    });
  }
};

export { GET };
export type { Params, SingleProjectPageResponse };
