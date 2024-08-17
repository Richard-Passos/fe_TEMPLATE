'use client';

import { ComponentPropsWithoutRef, useMemo } from 'react';

import { CatalogContext } from '@/contexts';
import {
  CatalogContextInitialState,
  catalogContextDefaultValue
} from '@/contexts/Catalog';
import { useFetch, useId, useQueryString } from '@/hooks';

type CatalogProviderOwnProps<T> = {
  items: T[];
  url?: string;
};

type CatalogProviderProps<T> = CatalogProviderOwnProps<T> &
  Omit<
    ComponentPropsWithoutRef<typeof CatalogContext.Provider>,
    keyof CatalogProviderOwnProps<T> | 'value'
  >;

const CatalogProvider = <T,>({
  items,
  url = '',
  ...props
}: CatalogProviderProps<T>) => {
  const id = useId(),
    queryStr = useQueryString([]);

  const [pathname = '', query = ''] = url.split('?');

  const { data: res, loading: isLoading } = useFetch<{
    data: [];
    meta: Pick<
      CatalogContextInitialState<T>,
      'page' | 'perPage' | 'totalPages' | 'totalResults'
    >;
  }>(pathname + `${queryStr}&${query}`);

  const {
    data,
    meta = {
      page: catalogContextDefaultValue.page,
      perPage: catalogContextDefaultValue.perPage,
      totalPages: catalogContextDefaultValue.totalPages,
      totalResults: catalogContextDefaultValue.totalResults
    }
  } = res ?? {};

  items = data ?? items;

  const isLastPage = meta.page >= meta.totalPages,
    isEmpty = !items.length;

  const context = useMemo(
    () => ({
      id,
      items,
      isLoading,
      isLastPage,
      isEmpty,
      ...meta
    }),
    [id, items, isLoading, isLastPage, isEmpty, meta]
  );

  return (
    <CatalogContext.Provider
      value={context}
      {...props}
    />
  );
};

export default CatalogProvider;
export type { CatalogProviderProps };
