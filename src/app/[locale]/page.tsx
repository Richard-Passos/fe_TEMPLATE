import { useMessages, useTranslations } from 'next-intl';
import { unstable_setRequestLocale } from 'next-intl/server';

import { LocalTime } from '@/components/atoms';
import { CtaTextBlockProps } from '@/components/organisms/Blocks/CtaText';
import { TextBlockDescription } from '@/components/organisms/Blocks/Text/Rich';
import { PrimaryHeroExtraIconProps } from '@/components/organisms/Heros/Primary/Extra/Icon';
import PrimaryHeroTitleRich from '@/components/organisms/Heros/Primary/Title/Rich';
import { PageTemplate } from '@/components/templates';
import { get, keys, times } from '@/utils';

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
          type: 'ProjectsCatalog',
          theme: 'dark',
          id: 'scroll-to',
          data: {
            title: keys(
              get(messages, 'pages.home.blocks.selectedProjects.title')
            ).map((key) => t(`blocks.selectedProjects.title.${key}`)),
            description: t('blocks.selectedProjects.description'),
            subtitle: t('blocks.selectedProjects.subtitle'),
            empty: t('blocks.selectedProjects.empty'),
            items: times(5, String).map((id, i) => ({
              slug: `title-${id}`,
              title: `Title - ${id}`,
              roles: ['design', 'development'],
              image: {
                src: `/images/project-${id.toString().padStart(2, '0')}.${i % 2 === 0 ? 'jpg' : 'png'}`,
                alt: ''
              }
            }))
          }
        },
        {
          type: 'Text',
          theme: 'dark',
          id: 'toExpect',
          data: {
            title: t.rich('blocks.toExpect.title'),
            description: t.rich('blocks.toExpect.description', {
              p: (chunks) => (
                <TextBlockDescription>{chunks}</TextBlockDescription>
              )
            })
          }
        },
        {
          type: 'ListPage',
          theme: 'dark',
          id: 'listWorkPage',
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
          id: 'but',
          data: {
            title: t('blocks.but.title'),
            description: t('blocks.but.description')
          }
        },
        {
          type: 'BentoGrid',
          theme: 'dark',
          id: 'aboutBentoGrid',
          hasAnimation: true,
          data: {
            title: keys(
              get(messages, 'pages.home.blocks.aboutBentoGrid.title')
            ).map((key) => t(`blocks.aboutBentoGrid.title.${key}`)),
            description: t.rich('blocks.aboutBentoGrid.description'),
            templates: {
              base: [
                'item-0',
                'item-1',
                'item-2',
                'item-3',
                'item-4',
                'item-5',
                'item-6'
              ],
              sm: [
                'item-0 item-0',
                'item-1 item-2',
                'item-3 item-4',
                'item-5 item-6'
              ],
              lg: [
                '. item-0 item-0',
                '. item-0 item-0',
                'item-1 item-2 item-3',
                'item-1 item-2 item-4',
                'item-5 item-5 item-6',
                'item-5 item-5 item-6'
              ]
            },
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
          id: 'listAboutPage',
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
          id: 'cta',
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
