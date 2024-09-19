'use server';

import { SinglePageResponse } from '@/app/api/pages/[slug]/route';
import { Locale, Pages } from '@/types';
import { request } from '@/utils';

type Params = {
  slug: string;
  locale: Locale['value'];
};

const pagesApiGetOne = async <T extends Pages = Pages>(
  params: Params,
  config?: Parameters<typeof request>['1']
) =>
  await request<SinglePageResponse<T>>(
    `/api/pages/${params.slug}?locale=${params.locale}`,
    config
  );

export default pagesApiGetOne;
