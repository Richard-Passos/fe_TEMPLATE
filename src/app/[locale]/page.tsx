import {
  getMessages,
  getTranslations,
  unstable_setRequestLocale
} from 'next-intl/server';

import { LocalTime } from '@/components/atoms';
import { CtaTextBlockProps } from '@/components/organisms/Blocks/CtaText';
import { ProjectsCatalogBlockProps } from '@/components/organisms/Blocks/ProjectsCatalog';
import { TextBlockDescription } from '@/components/organisms/Blocks/Text/Rich';
import { PrimaryHeroExtraIconProps } from '@/components/organisms/Heros/Primary/Extra/Icon';
import PrimaryHeroTitleRich from '@/components/organisms/Heros/Primary/Title/Rich';
import { PageTemplate } from '@/components/templates';
import { keys, request } from '@/utils';

import { ProjectsResponse } from '../api/projects/route';
import { LayoutParams } from './layout';

type HomePageOwnProps = {};

type HomePageParams = LayoutParams;

type HomePageProps = HomePageOwnProps & HomePageParams;

const HomePage = async ({ params: { locale } }: HomePageProps) => {
  unstable_setRequestLocale(locale);

  const [t, globalT, m, data] = await Promise.all([
    getTranslations('pages.home'),
    getTranslations(),
    getMessages(),
    request<ProjectsResponse>(`/api/projects?locale=${locale}&is-selected=true`)
  ]);

  const messages = m as unknown as IntlMessages;

  const projects: ProjectsCatalogBlockProps['data']['items'] = data.ok
    ? data.data.map(({ year, ...d }) => d)
    : [];

  return (
    <PageTemplate
      blocks={[
        {
          type: 'ProjectsCatalog',
          theme: 'dark',
          id: 'scroll-to',
          data: {
            title: keys(messages.pages.home.blocks.selectedProjects.title).map(
              (key) => ({
                id: key,
                text: t.rich(`blocks.selectedProjects.title.${key}`)
              })
            ),
            description: t.rich('blocks.selectedProjects.description'),
            empty: t.rich('blocks.selectedProjects.empty'),
            items: projects
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
            items: keys(messages.pages.home.blocks.listWorkPage.items).map(
              (key) => ({
                id: key,
                text: t(`blocks.listWorkPage.items.${key}.text`),
                separator: t(`blocks.listWorkPage.items.${key}.separator`)
              })
            ),
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
            title: keys(messages.pages.home.blocks.aboutBentoGrid.title).map(
              (key) => ({
                id: key,
                text: t.rich(`blocks.aboutBentoGrid.title.${key}`)
              })
            ),
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
                id: 'description',
                data: {
                  title: t.rich(
                    'blocks.aboutBentoGrid.items.description.title'
                  ),
                  description: t.rich(
                    'blocks.aboutBentoGrid.items.description.description',
                    {
                      country: () => globalT('personal.location.country')
                    }
                  )
                }
              },
              {
                type: 'Bold',
                id: 'location',
                data: {
                  icon: t('blocks.aboutBentoGrid.items.location.icon'),
                  description: t(
                    'blocks.aboutBentoGrid.items.location.description',
                    {
                      country: globalT('personal.location.country'),
                      gmt: globalT('personal.location.gmt')
                    }
                  )
                }
              },
              {
                type: 'Marquee',
                id: 'values',
                data: {
                  icon: t('blocks.aboutBentoGrid.items.values.icon'),
                  title: t('blocks.aboutBentoGrid.items.values.title'),
                  items: keys(messages.values.personal).map((key) =>
                    globalT(`values.personal.${key}.title`)
                  )
                }
              },
              {
                type: 'Simple',
                id: 'improving',
                data: {
                  icon: t('blocks.aboutBentoGrid.items.improving.icon'),
                  description: t(
                    'blocks.aboutBentoGrid.items.improving.description'
                  )
                }
              },
              {
                type: 'Simple',
                id: 'hobbie',
                data: {
                  icon: t('blocks.aboutBentoGrid.items.hobbie.icon'),
                  description: t(
                    'blocks.aboutBentoGrid.items.hobbie.description'
                  )
                }
              },
              {
                type: 'Time',
                id: 'localTime',
                data: {
                  title: t('blocks.aboutBentoGrid.items.localTime.title'),
                  time: <LocalTime />
                }
              },
              {
                type: 'Link',
                id: 'buyCoffee',
                data: {
                  icon: globalT('personal.buyCoffee.icon'),
                  href: globalT('personal.buyCoffee.href'),
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
            items: keys(messages.pages.home.blocks.listAboutPage.items).map(
              (key) => ({
                id: key,
                text: t(`blocks.listAboutPage.items.${key}.text`),
                separator: t(`blocks.listAboutPage.items.${key}.separator`)
              })
            ),
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
        id: 'hero',
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
            id: 'left',
            type: 'Icon',
            data: {
              src: t('hero.left.src'),
              animation: t(
                'hero.left.animation'
              ) as PrimaryHeroExtraIconProps['data']['animation']
            }
          },
          right: {
            id: 'right',
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
export type { HomePageProps, HomePageParams };
