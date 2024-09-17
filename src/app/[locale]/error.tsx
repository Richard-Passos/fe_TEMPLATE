'use client';

import { useLocale } from 'next-intl';
import { notFound } from 'next/navigation';
import { useEffect, useState } from 'react';

import { pagesApi } from '@/api';
import { ErrorTemplate } from '@/components/templates';
import { defaultPages } from '@/constants';
import { type ErrorPage, Locale } from '@/types';

type ErrorPageProps = {
  error: Error & { digest?: string };
  reset: () => void;
};

const ErrorPage = ({ error, reset }: ErrorPageProps) => {
  useEffect(() => {
    console.error(error);
    console.error(reset);
  }, [error, reset]);
  const locale = useLocale() as Locale['value'],
    [page, setPage] = useState<ErrorPage>();

  useEffect(() => {
    const getPage = async () => {
      const res = await pagesApi.getOne<ErrorPage>({
        slug: defaultPages.error,
        locale
      });

      if (!res.ok) return notFound();

      const page = res.data;

      setPage({
        ...page,
        hero: {
          ...page.hero,
          data: {
            ...page.hero.data,
            actions: {
              ...page.hero.data.actions,
              primary: {
                ...page.hero.data.actions?.primary,
                onClick: reset
              }
            }
          }
        }
      });
    };

    getPage();
  }, [reset]);

  if (!page) return null;

  return (
    <ErrorTemplate
      blocks={page.blocks}
      hero={page.hero}
    />
  );
};

export default ErrorPage;
export type { ErrorPageProps };
