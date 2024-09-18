import { NextRequest, NextResponse } from 'next/server';

import { defaultLocale } from '@/constants/locales';
import { CookiesConsent, Locale } from '@/types';
import { getTranslations, isType } from '@/utils';

type SearchParams = {
  locale: Locale['value'];
};

const DEFAULT_PARAMS: SearchParams = {
  locale: defaultLocale.value
};

type CookiesConsentResponse =
  | { ok: false; status: 500; message: string }
  | {
      ok: true;
      status: 200;
      data: CookiesConsent;
    };

const GET = async (
  request: NextRequest
): Promise<ReturnType<typeof NextResponse.json<CookiesConsentResponse>>> => {
  try {
    const { searchParams } = request.nextUrl;

    const params: { [K in keyof SearchParams]: string | null } = {
      locale: searchParams.get('locale')
    };

    const locale = isType<SearchParams['locale']>(params.locale)
      ? params.locale
      : DEFAULT_PARAMS.locale;

    const t = getTranslations(locale);

    const data = await t.cookiesConsent();

    return NextResponse.json({
      ok: true,
      status: 200,
      data
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
export type { CookiesConsentResponse };
