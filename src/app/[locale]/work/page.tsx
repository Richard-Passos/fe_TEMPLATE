import { useMessages, useTranslations } from 'next-intl';
import { getTranslations, unstable_setRequestLocale } from 'next-intl/server';

import { Link } from '@/components/atoms';
import { ValuesBlockProps } from '@/components/organisms/Blocks/Values';
import { PrimaryHeroExtraIconProps } from '@/components/organisms/Heros/Primary/Extra/Icon';
import PrimaryHeroTitleRich from '@/components/organisms/Heros/Primary/Title/Rich';
import { PageTemplate } from '@/components/templates';
import { get, keys, times } from '@/utils';

import { LayoutParams } from '../layout';

type WorkPageOwnProps = {};

type WorkPageParams = LayoutParams;

type WorkPageProps = WorkPageOwnProps & WorkPageParams;

const WorkPage = ({ params: { locale } }: WorkPageProps) => {
  unstable_setRequestLocale(locale);

  const t = useTranslations('pages.work'),
    gt = useTranslations(),
    messages = useMessages() as unknown as IntlMessages;

  return (
    <PageTemplate
      blocks={[
        {
          type: 'ListMission',
          theme: 'dark',
          id: 'scroll-to',
          data: {
            items: keys(get(messages, 'pages.work.blocks.mission.items')).map(
              (key) => ({
                text: t(`blocks.mission.items.${key}.text`),
                icon: t(`blocks.mission.items.${key}.icon`)
              })
            ),
            description: t.rich('blocks.mission.description')
          }
        },
        {
          type: 'Services',
          theme: 'dark',
          id: 'services',
          data: {
            title: keys(get(messages, 'pages.work.blocks.services.title')).map(
              (key) => t(`blocks.services.title.${key}`)
            ),
            description: t.rich('blocks.services.description'),
            subtitle: t.rich('blocks.services.subtitle'),
            image: {
              src: t('blocks.services.image.src'),
              alt: t('blocks.services.image.alt')
            },
            items: keys(get(messages, 'services')).map((key, i) => ({
              id: `· ${(i + 1).toString().padStart(2, '0')}`,
              title: gt(`services.${key}.title`),
              description: gt(`services.${key}.description`)
            })),
            action: {
              label: t('blocks.services.action.label')
            }
          }
        },
        {
          type: 'ProjectsCatalog',
          theme: 'light',
          id: 'selectedProjects',
          data: {
            title: keys(
              get(messages, 'pages.work.blocks.selectedProjects.title')
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
          type: 'Stats',
          theme: 'dark',
          id: 'whyMe',
          data: {
            title: keys(get(messages, 'pages.work.blocks.whyMe.title')).map(
              (key) => t(`blocks.whyMe.title.${key}`)
            ),
            description: t.rich('blocks.whyMe.description', {
              contact: (chunks) => (
                <Link
                  className='text-[1em]'
                  href='/contact'
                >
                  {chunks}
                </Link>
              )
            }),
            subtitle: t.rich('blocks.whyMe.subtitle'),
            items: keys(get(messages, 'stats')).map((key) => ({
              id: key,
              title: gt.rich(`stats.${key}.title`),
              value: gt.rich(`stats.${key}.value`)
            }))
          }
        },
        {
          type: 'Skills',
          theme: 'dark',
          id: 'hardSkills',
          data: {
            title: t.rich('blocks.hardSkills.title'),
            items: keys(get(messages, 'skills.hard')).map((key) => ({
              id: key,
              title: gt(`skills.hard.${key}.title`),
              icon: gt(`skills.hard.${key}.icon`)
            }))
          }
        },
        {
          type: 'Skills',
          theme: 'dark',
          id: 'softSkills',
          data: {
            title: t.rich('blocks.softSkills.title'),
            items: keys(get(messages, 'skills.soft')).map((key) => ({
              id: key,
              title: gt(`skills.soft.${key}.title`),
              icon: gt(`skills.soft.${key}.icon`)
            }))
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
            items: keys(get(messages, 'values.work')).map((key) => ({
              id: key,
              title: gt.rich(`values.work.${key}.title`),
              description: gt.rich(`values.work.${key}.description`),
              icon: gt(`values.work.${key}.icon`)
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
            type: 'Text',
            data: {
              text: t('hero.left.text')
            }
          },
          right: {
            type: 'Icon',
            data: {
              src: t('hero.right.src'),
              animation: t(
                'hero.right.animation'
              ) as PrimaryHeroExtraIconProps['data']['animation']
            }
          }
        }
      }}
    />
  );
};

const generateMetadata = async ({ params: { locale } }: WorkPageParams) => {
  const t = await getTranslations({
    locale,
    namespace: 'pages.work.metadata'
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

export default WorkPage;
export { generateMetadata };
export type { WorkPageProps, WorkPageParams };
