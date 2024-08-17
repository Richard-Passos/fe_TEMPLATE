import { useTranslations } from 'next-intl';
import { getTranslations, unstable_setRequestLocale } from 'next-intl/server';

import { PrimaryHeroExtraIconProps } from '@/components/organisms/Heros/Primary/Extra/Icon';
import PrimaryHeroTitleRich from '@/components/organisms/Heros/Primary/Title/Rich';
import { PageTemplate } from '@/components/templates';

import { LayoutParams } from '../layout';

type AboutPageOwnProps = {};

type AboutPageParams = LayoutParams;

type AboutPageProps = AboutPageOwnProps & AboutPageParams;

const AboutPage = ({ params: { locale } }: AboutPageProps) => {
  unstable_setRequestLocale(locale);

  const t = useTranslations('pages.about');

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
