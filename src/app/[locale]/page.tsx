import { unstable_setRequestLocale } from 'next-intl/server';

import { HomeTemplate } from '@/components/templates';

import { LayoutParams } from './layout';

type HomePageOwnProps = {};

type HomePageParams = LayoutParams;

type HomePageProps = HomePageOwnProps & HomePageParams;

const HomePage = ({ params: { locale } }: HomePageProps) => {
  unstable_setRequestLocale(locale);

  return <HomeTemplate namespace='pages.home' />;
};

export default HomePage;
export type { HomePageProps, HomePageParams };
