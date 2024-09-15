import { NextRequest, NextResponse } from 'next/server';

import { defaultLocale } from '@/constants/locales';
import { Locale, Page } from '@/types';
import { getTranslations, isType } from '@/utils';

type SearchParams = {
  page: number;
  perPage: number;
  isSelected: 'false' | 'true';
  locale: Locale['value'];
};

const DEFAULT_PARAMS: SearchParams = {
  page: 1,
  perPage: 5,
  isSelected: 'false',
  locale: defaultLocale.value
};

type PagesResponse =
  | { ok: false; status: 500; message: string }
  | {
      ok: true;
      status: 200;
      data: Page[];
      meta: {
        page: number;
        totalPages: number;
        totalResults: number;
      };
    };

const GET = async (
  request: NextRequest
): Promise<ReturnType<typeof NextResponse.json<PagesResponse>>> => {
  try {
    const { searchParams } = request.nextUrl;

    const params: { [K in keyof SearchParams]: string | null } = {
      page: searchParams.get('page'),
      perPage: searchParams.get('per-page'),
      isSelected: searchParams.get('is-selected'),
      locale: searchParams.get('locale')
    };

    const page = isType<SearchParams['page']>(params.page)
        ? parseInt(params.page)
        : DEFAULT_PARAMS.page,
      perPage = isType<SearchParams['perPage']>(params.perPage)
        ? parseInt(params.perPage)
        : DEFAULT_PARAMS.perPage,
      isSelected = isType<SearchParams['isSelected']>(params.isSelected)
        ? params.isSelected
        : DEFAULT_PARAMS.isSelected,
      locale = isType<SearchParams['locale']>(params.locale)
        ? params.locale
        : DEFAULT_PARAMS.locale;

    const t = getTranslations(locale);

    let results = await t.pages();

    if (isSelected === 'true')
      results = results.filter((data) => data.isSelected);

    const totalResults = results.length;

    results = results.slice((page - 1) * perPage, page * perPage);

    return NextResponse.json({
      ok: true,
      status: 200,
      data: results,
      meta: {
        page,
        totalPages: Math.ceil(totalResults / perPage),
        totalResults
      }
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
export type { PagesResponse };
