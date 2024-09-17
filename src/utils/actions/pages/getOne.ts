'use server';

import { SinglePageResponse } from '@/app/api/pages/[slug]/route';
import { ErrorPage, Locale, Page, SingleProjectPage } from '@/types';
import { request } from '@/utils';

type Params = {
  slug: string;
  locale: Locale['value'];
};

const pagesApiGetOne = async <
  T extends Page | ErrorPage | SingleProjectPage = Page
>(
  params: Params,
  config?: Parameters<typeof request>['1']
) =>
  await request<SinglePageResponse<T>>(
    `/api/pages/${params.slug}?locale=${params.locale}`,
    config
  );

export default pagesApiGetOne;
