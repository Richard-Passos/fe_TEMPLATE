import { MetadataRoute } from 'next';

import { baseUrl } from '@/utils';

const sitemap = (): MetadataRoute.Sitemap => {
  return [
    {
      url: baseUrl,
      lastModified: new Date()
    }
  ];
};

export default sitemap;
