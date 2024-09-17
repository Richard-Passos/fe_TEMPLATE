import { MetadataRoute } from 'next';

import { baseUrl, defaultPages } from '@/constants';
import { defaultLocale } from '@/constants/locales';
import { pagesApi } from '@/utils/actions';

const sitemap = async (): Promise<MetadataRoute.Sitemap> => {
  const res = await pagesApi.get({ locale: defaultLocale.value });

  if (!res.ok) return [];

  const paths = res.data.map((p) => ({
    url: `${baseUrl}/${p.slug === defaultPages.home ? '' : p.slug}`,
    lastModified: new Date()
  }));

  return paths;
};

export default sitemap;
