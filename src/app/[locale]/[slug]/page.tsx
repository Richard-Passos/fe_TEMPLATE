import { Metadata } from 'next';
import { unstable_setRequestLocale } from 'next-intl/server';
import { notFound } from 'next/navigation';

import { LegalTemplate, PageTemplate } from '@/components/templates';
import { defaultPages } from '@/constants';
import { LegalPage, Pages, Page as TPage } from '@/types';
import { normId, values } from '@/utils';
import { pagesApi } from '@/utils/actions';

import { LayoutParams } from '../layout';

type PageOwnProps = {};

type PageParams = {
  params: { slug: string } & LayoutParams['params'];
};

type PageProps = PageOwnProps & PageParams;

const isValidPage = (slug: string, page: Pages): page is TPage | LegalPage => {
  if (values(defaultPages).includes(slug)) return false;

  if (!!page.type && page.type !== 'page' && page.type !== 'legal')
    return false;

  return true;
};

const Page = async ({ params: { slug, locale } }: PageProps) => {
  unstable_setRequestLocale(locale);

  slug = normId(slug);

  const res = await pagesApi.getOne({ slug, locale });

  if (!res.ok) return notFound();

  const page = res.data;

  if (!isValidPage(slug, page)) return notFound();

  if (page.type === 'legal') return <LegalTemplate blocks={page.blocks} />;

  return (
    <PageTemplate
      blocks={page.blocks}
      hero={page.hero}
    />
  );
};

const generateMetadata = async ({
  params: { slug, locale }
}: PageParams): Promise<Metadata> => {
  slug = normId(slug);

  const res = await pagesApi.getOne({ slug, locale });

  if (!res.ok) return notFound();

  const page = res.data;

  if (!isValidPage(slug, page)) return notFound();

  return page.metadata;
};

const generateStaticParams = async ({ params: { locale } }: LayoutParams) => {
  const res = await pagesApi.get({ locale });

  const pages = res.ok ? res.data : [];

  return pages.map((p) => ({ slug: p.slug }));
};

export default Page;
export { generateMetadata, generateStaticParams };
export type { PageProps, PageParams };
