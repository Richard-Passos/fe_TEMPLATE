import { useMessages, useTranslations } from 'next-intl';
import { getTranslations, unstable_setRequestLocale } from 'next-intl/server';

import { AboutBlockTextDescription } from '@/components/organisms/Blocks/About/Text/Rich';
import { ValuesBlockProps } from '@/components/organisms/Blocks/Values';
import { PageTemplate } from '@/components/templates';
import { get, keys } from '@/utils';

import { LayoutParams } from '../layout';

type AboutPageOwnProps = {};

type AboutPageParams = LayoutParams;

type AboutPageProps = AboutPageOwnProps & AboutPageParams;

const AboutPage = ({ params: { locale } }: AboutPageProps) => {
  unstable_setRequestLocale(locale);

  const t = useTranslations('pages.about'),
    gt = useTranslations(),
    messages = useMessages() as unknown as IntlMessages;

  return (
    <PageTemplate
      blocks={[
        {
          type: 'Images',
          theme: 'dark',
          id: 'images',
          data: {
            items: [
              {
                image: {
                  src: t('blocks.images.items.0.image.src'),
                  alt: t('blocks.images.items.0.image.alt')
                }
              },
              {
                image: {
                  src: t('blocks.images.items.1.image.src'),
                  alt: t('blocks.images.items.1.image.alt')
                }
              },
              {
                image: {
                  src: t('blocks.images.items.2.image.src'),
                  alt: t('blocks.images.items.2.image.alt')
                }
              }
            ]
          }
        },
        {
          type: 'About',
          theme: 'dark',
          id: 'about',
          data: {
            title: keys(get(messages, 'pages.about.blocks.about.title')).map(
              (key) => ({
                id: key,
                text: t.rich(`blocks.about.title.${key}`)
              })
            ),
            description: t.rich('blocks.about.description'),
            intro: {
              title: t.rich('blocks.about.intro.title'),
              description: t.rich('blocks.about.intro.description', {
                p: (chunks) => (
                  <AboutBlockTextDescription>
                    {chunks}
                  </AboutBlockTextDescription>
                )
              })
            },
            personality: {
              title: t.rich('blocks.about.personality.title'),
              description: t.rich('blocks.about.personality.description', {
                p: (chunks) => (
                  <AboutBlockTextDescription>
                    {chunks}
                  </AboutBlockTextDescription>
                )
              })
            },
            mission: {
              title: t.rich('blocks.about.mission.title'),
              description: t.rich('blocks.about.mission.description', {
                p: (chunks) => (
                  <AboutBlockTextDescription>
                    {chunks}
                  </AboutBlockTextDescription>
                )
              })
            }
          }
        },
        {
          type: 'Values',
          theme: 'dark',
          id: 'values',
          data: {
            title: t.rich('blocks.values.title'),
            templates: {
              base: ['item-0', 'item-1', 'item-2', 'item-3'],
              sm: ['item-0 item-1', 'item-2 item-3'],
              lg: ['item-0 item-1 .', '. item-2 item-3']
            },
            items: keys(get(messages, 'values.personal')).map((key) => ({
              id: key,
              title: gt.rich(`values.personal.${key}.title`),
              description: gt.rich(`values.personal.${key}.description`),
              icon: gt(`values.personal.${key}.icon`)
            })),
            icons: {
              left: {
                src: t('blocks.values.icons.left.src'),
                animation: t('blocks.values.icons.left.animation'),
                y: 'bottom'
              },
              right: {
                src: t('blocks.values.icons.right.src'),
                animation: t('blocks.values.icons.right.animation'),
                y: 'top'
              }
            } as ValuesBlockProps['data']['icons']
          }
        }
      ]}
      hero={{
        type: 'Secondary',
        theme: 'dark',
        id: 'hero',
        data: {
          title: t.rich('hero.title')
        }
      }}
    />
  );
};

const generateMetadata = async ({ params: { locale } }: AboutPageParams) => {
  const t = await getTranslations({
    locale,
    namespace: 'pages.about.metadata'
  });

  return {
    title: t('title'),
    description: t('description'),
    openGraph: {
      title: t('title'),
      description: t('description')
    }
  };
};

export default AboutPage;
export { generateMetadata };
export type { AboutPageProps, AboutPageParams };
