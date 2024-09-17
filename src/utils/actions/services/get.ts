'use server';

import { ServicesResponse } from '@/app/api/services/route';
import { Locale } from '@/types';
import { request } from '@/utils';

type Params = {
  locale: Locale['value'];
};

const servicesApiGet = async (
  params: Params,
  config?: Parameters<typeof request>['1']
) =>
  await request<ServicesResponse>(
    `/api/services?locale=${params.locale}`,
    config
  );

export default servicesApiGet;
