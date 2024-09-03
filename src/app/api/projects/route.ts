import { getMessages } from 'next-intl/server';
import { NextRequest } from 'next/server';

import { defaultLocale } from '@/constants/locales';
import { Project } from '@/types';
import { entries, normId, values } from '@/utils';

type ProjectsResponse =
  | { ok: false; status: 500; message: string }
  | {
      ok: true;
      status: 200;
      data: Project[];
      meta: {
        page: number;
        totalPages: number;
        totalResults: number;
      };
    };

const PAGE = 1,
  PER_PAGE = 5,
  ROLE = '',
  IS_SELECTED = false;

const GET = async (request: NextRequest) => {
  try {
    const { searchParams } = request.nextUrl;

    const locale = searchParams.get('locale') ?? defaultLocale.value,
      page = +(searchParams.get('page') ?? PAGE),
      perPage = +(searchParams.get('per-page') ?? PER_PAGE),
      role = normId(searchParams.get('role') ?? ROLE),
      isSelected = !!(searchParams.get('is-selected') ?? IS_SELECTED);

    const messages = (await getMessages(
      locale ? { locale } : undefined
    )) as unknown as IntlMessages;

    const projects = entries(messages.projects).map(([key, data]) => ({
      slug: key,
      ...data
    }));

    let results = projects;

    if (isSelected) results = projects.filter((data) => data.isSelected);

    if (role)
      results = projects.filter((data) => {
        const roles = values(data.roles);

        return roles.some((r) => normId(r) === role);
      });

    const totalResults = results.length;

    results = results.slice((page - 1) * perPage, page * perPage);

    return Response.json({
      ok: true,
      status: 200,
      data: results,
      meta: {
        page,
        totalPages: Math.ceil(totalResults / perPage),
        totalResults
      }
    } as ProjectsResponse);
  } catch {
    return Response.json({
      ok: false,
      status: 500,
      message: 'Something went wrong!'
    } as ProjectsResponse);
  }
};

export { GET };
export type { ProjectsResponse };
