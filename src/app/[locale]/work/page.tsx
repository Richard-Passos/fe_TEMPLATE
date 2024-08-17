import { useTranslations } from 'next-intl';
import { getTranslations, unstable_setRequestLocale } from 'next-intl/server';

import { PrimaryHeroExtraIconProps } from '@/components/organisms/Heros/Primary/Extra/Icon';
import PrimaryHeroTitleRich from '@/components/organisms/Heros/Primary/Title/Rich';
import { PageTemplate } from '@/components/templates';

import { LayoutParams } from '../layout';

type WorkPageOwnProps = {};

type WorkPageParams = LayoutParams;

type WorkPageProps = WorkPageOwnProps & WorkPageParams;

const WorkPage = ({ params: { locale } }: WorkPageProps) => {
  unstable_setRequestLocale(locale);

  const t = useTranslations('pages.work');

  return (
    <PageTemplate
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
