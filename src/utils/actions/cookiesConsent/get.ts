'use server';

import { CookiesConsentResponse } from '@/app/api/cookies-consent/route';
import { Locale } from '@/types';
import { request } from '@/utils';

type Params = {
  locale: Locale['value'];
};

const cookiesConsentApiGet = async (
  params: Params,
  config?: Parameters<typeof request>['1']
) =>
  await request<CookiesConsentResponse>(
    `/api/cookies-consent?locale=${params.locale}`,
    config
  );

export default cookiesConsentApiGet;
