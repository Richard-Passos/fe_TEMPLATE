'use server';

import { ProjectsResponse } from '@/app/api/projects/route';
import { Locale } from '@/types';
import { request } from '@/utils';

type Params = {
  locale: Locale['value'];
  isSelected?: boolean;
};

const projectsApiGet = async (
  params: Params,
  config?: Parameters<typeof request>['1']
) =>
  await request<ProjectsResponse>(
    `/api/projects?locale=${params.locale}&is-selected=${!!params.isSelected}`,
    config
  );

export default projectsApiGet;
