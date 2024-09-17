'use server';

import { PagesResponse } from '@/app/api/pages/route';
import { Locale } from '@/types';
import { request } from '@/utils';

type Params = {
  locale: Locale['value'];
  isSelected?: boolean;
};

const pagesApiGet = async (
  params: Params,
  config?: Parameters<typeof request>['1']
) =>
  await request<PagesResponse>(
    `/api/pages?locale=${params.locale}&is-selected=${!!params.isSelected}`,
    config
  );

export default pagesApiGet;
