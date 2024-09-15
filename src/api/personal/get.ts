import { PersonalResponse } from '@/app/api/personal/route';
import { Locale } from '@/types';
import { request } from '@/utils';

type Params = {
  locale: Locale['value'];
};

const personalApiGet = async (
  params: Params,
  config?: Parameters<typeof request>['1']
) =>
  await request<PersonalResponse>(
    `/api/personal?locale=${params.locale}`,
    config
  );

export default personalApiGet;
