'use client';

import { useEffect } from 'react';

import { ErrorTemplate } from '@/components/templates';

type ErrorPageProps = {
  error: Error & { digest?: string };
  reset: () => void;
};

const ErrorPage = ({ error, reset }: ErrorPageProps) => {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <ErrorTemplate
      message={error.message}
      namespace='pages.error'
      reset={reset}
    />
  );
};

export default ErrorPage;
export type { ErrorPageProps };
