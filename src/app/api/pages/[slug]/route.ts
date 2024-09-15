import { NextRequest, NextResponse } from 'next/server';

import { defaultLocale } from '@/constants/locales';
import { Locale, Page } from '@/types';
import { getTranslations, isType, normId } from '@/utils';

type Params = {
  slug: string;
};

type SearchParams = {
  locale: Locale['value'];
};

const DEFAULT_PARAMS: SearchParams = {
  locale: defaultLocale.value
};

type SinglePageResponse =
  | { ok: false; status: 404; message: string }
  | { ok: false; status: 500; message: string }
  | {
      ok: true;
      status: 200;
      data: Page;
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
): Promise<ReturnType<typeof NextResponse.json<SinglePageResponse>>> => {
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

    const pages = await t.pages();

    let dataIndex = pages.findIndex((p) => normId(p.slug) === slug);

    if (dataIndex === -1)
      return NextResponse.json({
        ok: false,
        status: 404,
        message: 'Page not found!'
      });

    const prevId = pages.at(dataIndex > 0 ? dataIndex - 1 : -1)?.slug,
      nextId = pages.at(dataIndex < pages.length - 1 ? dataIndex + 1 : 0)?.slug;

    const data = pages[dataIndex]!,
      adjacentIds = {
        prev: prevId,
        next: nextId
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
export type { SinglePageResponse };
