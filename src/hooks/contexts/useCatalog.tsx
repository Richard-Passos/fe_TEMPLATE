'use client';

import { useContext } from 'react';

import CatalogContext, { CatalogContextInitialState } from '@/contexts/Catalog';

const useCatalog = <T,>() => {
  const context = useContext<CatalogContextInitialState<T>>(CatalogContext);

  return context;
};

export default useCatalog;
