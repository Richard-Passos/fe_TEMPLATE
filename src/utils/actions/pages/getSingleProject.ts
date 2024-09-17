'use server';

import { SingleProjectPageResponse } from '@/app/api/pages/single-project/[slug]/route';
import { Locale } from '@/types';
import { request } from '@/utils';

type Params = {
  slug: string;
  locale: Locale['value'];
};

const pagesApiGetOne = async (
  params: Params,
  config?: Parameters<typeof request>['1']
) =>
  await request<SingleProjectPageResponse>(
    `/api/pages/single-project/${params.slug}?locale=${params.locale}`,
    config
  );

export default pagesApiGetOne;
