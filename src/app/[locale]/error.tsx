'use client';

import { useTranslations } from 'next-intl';
import { useEffect } from 'react';

import { ErrorTemplate } from '@/components/templates';

type ErrorPageProps = {
  error: Error & { digest?: string };
  reset: () => void;
};

const ErrorPage = ({ error, reset }: ErrorPageProps) => {
  useEffect(() => {
    console.error(error);
    console.error(reset);
  }, [error, reset]);

  const t = useTranslations('pages.error');

  return (
    <ErrorTemplate
      hero={{
        theme: 'dark',
        data: {
          title: t.rich('hero.title')
        }
      }}
    />
  );
};

export default ErrorPage;
export type { ErrorPageProps };
