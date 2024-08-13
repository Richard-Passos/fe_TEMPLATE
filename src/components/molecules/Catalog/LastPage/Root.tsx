'use client';

import { createPolymorphicComponent } from '@mantine/core';
import { forwardRef } from 'react';

import Box, { BoxProps } from '@/components/atoms/Box';
import { useCatalogContext } from '@/hooks/contexts';

type CatalogLastPageMoleculeOwnProps = {};

type CatalogLastPageMoleculeProps = CatalogLastPageMoleculeOwnProps &
  Omit<BoxProps, keyof CatalogLastPageMoleculeOwnProps>;

const CatalogLastPageMolecule = <T,>(
  props: CatalogLastPageMoleculeProps,
  ref: CatalogLastPageMoleculeProps['ref']
) => {
  const { isLastPage } = useCatalogContext<T>();

  if (!isLastPage) return null;

  return (
    <Box
      ref={ref}
      {...props}
    />
  );
};

export default createPolymorphicComponent<'div', CatalogLastPageMoleculeProps>(
  forwardRef(CatalogLastPageMolecule)
);
export type { CatalogLastPageMoleculeProps };
