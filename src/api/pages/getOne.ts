import { Locale } from '@/types';
import { request } from '@/utils';

import { SinglePageResponse } from '../../app/api/pages/[slug]/route';

type Params = {
  slug: string;
  locale: Locale['value'];
};

const pagesApiGetOne = async (
  params: Params,
  config?: Parameters<typeof request>['1']
) =>
  await request<SinglePageResponse>(
    `/api/pages/${params.slug}?locale=${params.locale}`,
    config
  );

export default pagesApiGetOne;
