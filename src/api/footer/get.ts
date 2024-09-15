import { FooterResponse } from '@/app/api/footer/route';
import { Locale } from '@/types';
import { request } from '@/utils';

type Params = {
  locale: Locale['value'];
};

const footerApiGet = async (
  params: Params,
  config?: Parameters<typeof request>['1']
) =>
  await request<FooterResponse>(`/api/footer?locale=${params.locale}`, config);

export default footerApiGet;
