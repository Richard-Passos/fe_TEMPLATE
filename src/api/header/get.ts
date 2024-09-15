import { HeaderResponse } from '@/app/api/header/route';
import { Locale } from '@/types';
import { request } from '@/utils';

type Params = {
  locale: Locale['value'];
};

const headerApiGet = async (
  params: Params,
  config?: Parameters<typeof request>['1']
) =>
  await request<HeaderResponse>(`/api/header?locale=${params.locale}`, config);

export default headerApiGet;
