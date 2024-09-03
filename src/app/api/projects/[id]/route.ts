import { getMessages } from 'next-intl/server';
import { NextRequest } from 'next/server';

import { defaultLocale } from '@/constants/locales';
import { Project } from '@/types';
import { keys, normId } from '@/utils';

type SingleProjectResponse =
  | { ok: false; status: 400; message: string }
  | { ok: false; status: 500; message: string }
  | {
      ok: true;
      status: 200;
      data: Project;
      meta: {
        adjacentIds: {
          prev: string;
          next: string;
        };
      };
    };

type Params = {
  id: string;
};

const GET = async (
  request: NextRequest,
  { params: { id } }: { params: Params }
) => {
  try {
    const { searchParams } = request.nextUrl;

    const locale = searchParams.get('locale') ?? defaultLocale.value;

    id = normId(id);

    const messages = (await getMessages({ locale })) as unknown as IntlMessages;

    const projectsIds = keys(messages.projects);

    let dataIndex = projectsIds.findIndex((slug) => normId(slug) === id);

    if (dataIndex === -1)
      return Response.json({
        ok: false,
        status: 400,
        message: 'Project not found!'
      } as SingleProjectResponse);

    const dataId = projectsIds.at(dataIndex)!,
      prevId = projectsIds.at(dataIndex > 0 ? dataIndex - 1 : -1),
      nextId = projectsIds.at(
        dataIndex < projectsIds.length - 1 ? dataIndex + 1 : 0
      );

    const data = {
        slug: dataId,
        ...messages.projects[dataId]
      },
      adjacentIds = {
        prev: prevId,
        next: nextId
      };

    return Response.json({
      ok: true,
      status: 200,
      data,
      meta: { adjacentIds }
    } as SingleProjectResponse);
  } catch {
    return Response.json({
      ok: false,
      status: 500,
      message: 'Something went wrong!'
    } as SingleProjectResponse);
  }
};

export { GET };
export type { Params, SingleProjectResponse };
