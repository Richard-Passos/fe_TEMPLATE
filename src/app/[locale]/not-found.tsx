import { Metadata } from 'next';
import { getLocale, unstable_setRequestLocale } from 'next-intl/server';

import { ErrorTemplate } from '@/components/templates';
import { defaultPages } from '@/constants';
import { ErrorPage, Locale } from '@/types';
import { pagesApi } from '@/utils/actions';

const NotFoundPage = async () => {
  const locale = (await getLocale()) as Locale['value'];

  unstable_setRequestLocale(locale);

  const res = await pagesApi.getOne<ErrorPage>({
    slug: defaultPages.notFound,
    locale
  });

  if (!res.ok) return null;

  const page = res.data;

  return (
    <ErrorTemplate
      blocks={page.blocks}
      hero={page.hero}
    />
  );
};

const generateMetadata = async (): Promise<Metadata> => {
  const locale = (await getLocale()) as Locale['value'];

  const res = await pagesApi.getOne<ErrorPage>({
    slug: defaultPages.notFound,
    locale
  });

  if (!res.ok) return {};

  const { metadata } = res.data;

  return metadata;
};

export default NotFoundPage;
export { generateMetadata };
