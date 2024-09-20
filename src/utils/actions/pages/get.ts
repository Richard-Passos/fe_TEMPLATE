'use server';

import { PagesResponse } from '@/app/api/pages/route';
import { Locale } from '@/types';
import { request } from '@/utils';

type Params = {
  locale: Locale['value'];
  type?: 'page' | 'error' | 'single-project' | 'legal';
  isSelected?: boolean;
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
