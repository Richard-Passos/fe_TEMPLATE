import { NextRequest, NextResponse } from 'next/server';

import { defaultLocale } from '@/constants/locales';
import { Locale, Statistic } from '@/types';
import { getTranslations, isType } from '@/utils';

type SearchParams = {
  locale: Locale['value'];
};

const DEFAULT_PARAMS: SearchParams = {
  locale: defaultLocale.value
};

type StatisticsResponse =
  | { ok: false; status: 500; message: string }
  | {
      ok: true;
      status: 200;
      data: Statistic[];
      meta: {
        totalResults: number;
      };
    };

const GET = async (
  request: NextRequest
): Promise<ReturnType<typeof NextResponse.json<StatisticsResponse>>> => {
  try {
    const { searchParams } = request.nextUrl;

    const params: Record<keyof SearchParams, string | null> = {
      locale: searchParams.get('locale')
    };

    const locale = isType<SearchParams['locale']>(
      !!params.locale,
      params.locale
    )
      ? params.locale
      : DEFAULT_PARAMS.locale;

    const t = getTranslations(locale);

    const statistics = await t.statistics();

    const results = statistics;

    const totalResults = results.length;

    return NextResponse.json({
      ok: true,
      status: 200,
      data: results,
      meta: {
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
export type { StatisticsResponse };
