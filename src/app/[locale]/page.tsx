import { useMessages, useTranslations } from 'next-intl';
import { unstable_setRequestLocale } from 'next-intl/server';

import { LocalTime } from '@/components/atoms';
import { BentoGridBlockProps } from '@/components/organisms/Blocks/BentoGrid';
import { CtaTextBlockProps } from '@/components/organisms/Blocks/CtaText';
import { PrimaryHeroExtraIconProps } from '@/components/organisms/Heros/Primary/Extra/Icon';
import PrimaryHeroTitleRich from '@/components/organisms/Heros/Primary/Title/Rich';
import { PageTemplate } from '@/components/templates';
import { get, keys } from '@/utils';

import { LayoutParams } from './layout';

type HomePageOwnProps = LayoutParams;

type HomePageProps = HomePageOwnProps;

const HomePage = ({ params: { locale } }: HomePageProps) => {
  unstable_setRequestLocale(locale);

  const t = useTranslations('pages.home'),
    gt = useTranslations(),
    messages = useMessages() as unknown as IntlMessages;

  return (
    <PageTemplate
      blocks={[
        {
          type: 'SelectProjectsCatalog',
          theme: 'dark',
          id: 'scroll-to',
          data: {
            title: keys(
              get(messages, 'pages.home.blocks.selectedProjects.title')
            ).map((key) => t(`blocks.selectedProjects.title.${key}`)),
            description: t('blocks.selectedProjects.description'),
            subtitle: t('blocks.selectedProjects.subtitle'),
            empty: t('blocks.selectedProjects.empty'),
            action: {
              label: t('blocks.selectedProjects.action.label')
            }
          }
        },
        {
          type: 'ListPage',
          theme: 'dark',
          data: {
            items: keys(
              get(messages, 'pages.home.blocks.listWorkPage.items')
            ).map((key) => t(`blocks.listWorkPage.items.${key}`)),
            action: {
              label: t('blocks.listWorkPage.action.label'),
              href: '/work'
            }
          }
        },
        {
          type: 'But',
          theme: 'light',
          data: {
            title: t('blocks.but.title'),
            description: t('blocks.but.description')
          }
        },
        {
          type: 'AnimatedBentoGrid',
          theme: 'dark',
          data: {
            title: keys(
              get(messages, 'pages.home.blocks.aboutBentoGrid.title')
            ).map((key) => t(`blocks.aboutBentoGrid.title.${key}`)),
            templates: keys(
              get(messages, 'pages.home.blocks.aboutBentoGrid.templates')
            ).reduce(
              (obj, key) => ({
                ...obj,
                [key]: keys(
                  get(
                    messages,
                    `pages.home.blocks.aboutBentoGrid.templates.${key}`
                  )
                ).map((k) => t(`blocks.aboutBentoGrid.templates.${key}.${k}`))
              }),
              {}
            ) as BentoGridBlockProps['data']['templates'],
            items: [
              {
                type: 'Description',
                data: {
                  title: t.rich(
                    'blocks.aboutBentoGrid.items.description.title'
                  ),
                  description: t.rich(
                    'blocks.aboutBentoGrid.items.description.description',
                    {
                      country: () => gt('personal.location.country')
                    }
                  )
                }
              },
              {
                type: 'Bold',
                data: {
                  icon: t('blocks.aboutBentoGrid.items.location.icon'),
                  description: t(
                    'blocks.aboutBentoGrid.items.location.description',
                    {
                      country: gt('personal.location.country'),
                      gmt: gt('personal.location.gmt')
                    }
                  )
                }
              },
              {
                type: 'Marquee',
                data: {
                  icon: t('blocks.aboutBentoGrid.items.values.icon'),
                  title: t('blocks.aboutBentoGrid.items.values.title'),
                  items: keys(get(messages, 'values.personal')).map((key) =>
                    gt(`values.personal.${key}.title`)
                  )
                }
              },
              {
                type: 'Simple',
                data: {
                  icon: t('blocks.aboutBentoGrid.items.improving.icon'),
                  description: t(
                    'blocks.aboutBentoGrid.items.improving.description'
                  )
                }
              },
              {
                type: 'Simple',
                data: {
                  icon: t('blocks.aboutBentoGrid.items.hobbie.icon'),
                  description: t(
                    'blocks.aboutBentoGrid.items.hobbie.description'
                  )
                }
              },
              {
                type: 'Time',
                data: {
                  title: t('blocks.aboutBentoGrid.items.localTime.title'),
                  time: <LocalTime />
                }
              },
              {
                type: 'Link',
                data: {
                  icon: gt('personal.buyCoffee.icon'),
                  href: gt('personal.buyCoffee.href'),
                  title: t('blocks.aboutBentoGrid.items.buyCoffee.title')
                }
              }
            ]
          }
        },
        {
          type: 'ListPage',
          theme: 'dark',
          data: {
            items: keys(
              get(messages, 'pages.home.blocks.listAboutPage.items')
            ).map((key) => t(`blocks.listAboutPage.items.${key}`)),
            action: {
              label: t('blocks.listAboutPage.action.label'),
              href: '/about'
            }
          }
        },
        {
          type: 'CtaText',
          theme: 'dark',
          data: {
            description: t('blocks.cta.description'),
            icons: {
              left: {
                src: t('blocks.cta.icons.left.src'),
                animation: t('blocks.cta.icons.left.animation'),
                y: 'top'
              },
              right: {
                src: t('blocks.cta.icons.right.src'),
                animation: t('blocks.cta.icons.right.animation'),
                y: 'bottom'
              }
            } as CtaTextBlockProps['data']['icons']
          }
        }
      ]}
      hero={{
        type: 'Primary',
        theme: 'light',
        data: {
          title: t.rich('hero.title', {
            Start: (chunks) => (
              <PrimaryHeroTitleRich.Start>{chunks}</PrimaryHeroTitleRich.Start>
            ),
            Center: (chunks) => (
              <PrimaryHeroTitleRich.Center>
                {chunks}
              </PrimaryHeroTitleRich.Center>
            ),
            End: (chunks) => (
              <PrimaryHeroTitleRich.End>{chunks}</PrimaryHeroTitleRich.End>
            ),
            Description: () => (
              <PrimaryHeroTitleRich.Description>
                {t.rich('hero.description')}
              </PrimaryHeroTitleRich.Description>
            )
          }),
          description: t.rich('hero.description'),
          left: {
            type: 'Icon',
            data: {
              src: t('hero.left.src'),
              animation: t(
                'hero.left.animation'
              ) as PrimaryHeroExtraIconProps['data']['animation']
            }
          },
          right: {
            type: 'Text',
            data: {
              text: t('hero.right.text')
            }
          }
        }
      }}
    />
  );
};

export default HomePage;
export type { HomePageProps };
