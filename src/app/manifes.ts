import type { MetadataRoute } from 'next';
import { getTranslations } from 'next-intl/server';

import { defaultLocale } from '@/constants/locales';

const manifest = async (): Promise<MetadataRoute.Manifest> => {
  const t = await getTranslations({
    locale: defaultLocale.value,
    namespace: 'personal'
  });

  return {
    name: t('title', {
      name: `${t('name.first')} ${t('name.last')}`
    }),
    short_name: `${t('name.first')} ${t('name.last')}`,
    description: t('description', { country: t('location.country') }),
    start_url: '/',
    display: 'standalone',
    background_color: '#f4f5f6',
    theme_color: '#f4f5f6',
    icons: [
      {
        src: '/favicon.ico',
        sizes: 'any',
        type: 'image/x-icon'
      },
      {
        src: '/android-chrome-192x192.png',
        sizes: '192x192',
        type: 'image/png'
      },
      {
        src: '/android-chrome-512x512.png',
        sizes: '512x512',
        type: 'image/png'
      }
    ]
  };
};

export default manifest;
