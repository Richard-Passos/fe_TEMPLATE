import { unstable_setRequestLocale } from 'next-intl/server';
import { notFound } from 'next/navigation';

import { PageTemplate } from '@/components/templates';
import { defaultPages } from '@/constants';
import { Page } from '@/types';
import { pagesApi } from '@/utils/actions';

import { LayoutParams } from './layout';

type HomePageOwnProps = {};

type HomePageParams = LayoutParams;

type HomePageProps = HomePageOwnProps & HomePageParams;

const HomePage = async ({ params: { locale } }: HomePageProps) => {
  unstable_setRequestLocale(locale);

  const res = await pagesApi.getOne<Page>({ slug: defaultPages.home, locale });

  if (!res.ok) return notFound();

  const page = res.data;

  return <PageTemplate blocks={page.blocks} />;
};

export default HomePage;
export type { HomePageProps, HomePageParams };
