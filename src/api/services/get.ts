import { Locale } from '@/types';
import { request } from '@/utils';

import { ServicesResponse } from '../../app/api/services/route';

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
