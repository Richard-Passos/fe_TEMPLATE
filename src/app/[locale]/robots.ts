import { MetadataRoute } from 'next';

import { baseUrl } from '@/utils';

const robots = (): MetadataRoute.Robots => {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: '/private/'
    },
    sitemap: `${baseUrl}/sitemap.xml`
  };
};

export default robots;
