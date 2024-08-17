import { useTranslations } from 'next-intl';
import { unstable_setRequestLocale } from 'next-intl/server';

import { PrimaryHeroExtraIconProps } from '@/components/organisms/Heros/Primary/Extra/Icon';
import PrimaryHeroTitleRich from '@/components/organisms/Heros/Primary/Title/Rich';
import { PageTemplate } from '@/components/templates';

import { LayoutParams } from '../../layout';

type SingleProjectPageOwnProps = {};

type SingleProjectPageParams = {
  params: { id: string } & LayoutParams['params'];
};

type SingleProjectPageProps = SingleProjectPageOwnProps &
  SingleProjectPageParams;

const SingleProjectPage = ({
  params: { locale, id }
}: SingleProjectPageProps) => {
  unstable_setRequestLocale(locale);

  console.log(id);

  const t = useTranslations('pages.singleProject');

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

const generateMetadata = async ({
  params: { locale, id }
}: SingleProjectPageParams) => {
  /* const t = await getTranslations({
    locale,
    namespace: 'pages.singleProject.metadata'
  });

  return {
    title: t('title'),
    description: t('description'),
    openGraph: {
      title: t('title'),
      description: t('description')
    }
  }; */
};

const generateStaticParams = () =>
  Array.from(Array(10).keys()).map((id) => ({ id: id.toString() }));

export default SingleProjectPage;
export { generateMetadata, generateStaticParams };
export type { SingleProjectPageProps, SingleProjectPageParams };
