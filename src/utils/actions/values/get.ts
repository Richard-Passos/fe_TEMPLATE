'use server';

import { ValuesResponse } from '@/app/api/values/[slug]/route';
import { Locale } from '@/types';
import { request } from '@/utils';

type Params = {
  id: string;
  locale: Locale['value'];
};

const valuesApiGet = async (
  params: Params,
  config?: Parameters<typeof request>['1']
) =>
  await request<ValuesResponse>(
    `/api/values/${params.id}?locale=${params.locale}`,
    config
  );

export default valuesApiGet;
