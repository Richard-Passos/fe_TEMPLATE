'use server';

import { PagesResponse } from '@/app/api/pages/route';
import { Locale, Pages } from '@/types';
import { request } from '@/utils';

type Params = {
  locale: Locale['value'];
  type?: Pages['type'];
  isSelected?: Pages['isSelected'];
};

const pagesApiGet = async (
  params: Params,
  config?: Parameters<typeof request>['1']
) => {
  const locale = params.locale ? `locale=${params.locale}` : '',
    isSelected = params.isSelected ? `is-selected=${!!params.isSelected}` : '',
    type = params.type ? `type=${params.type}` : '';

  const query = [locale, isSelected, type].join('&');

  return await request<PagesResponse>(`/api/pages?${query}`, config);
};

export default pagesApiGet;
