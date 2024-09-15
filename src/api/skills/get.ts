import { Locale } from '@/types';
import { request } from '@/utils';

import { SkillsResponse } from '../../app/api/skills/[slug]/route';

type Params = {
  id: string;
  locale: Locale['value'];
};

const skillsApiGet = async (
  params: Params,
  config?: Parameters<typeof request>['1']
) =>
  await request<SkillsResponse>(
    `/api/skills/${params.id}?locale=${params.locale}`,
    config
  );

export default skillsApiGet;
