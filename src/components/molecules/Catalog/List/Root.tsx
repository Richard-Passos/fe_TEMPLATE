'use client';

import { createPolymorphicComponent } from '@mantine/core';
import { ReactNode, forwardRef } from 'react';

import Box, { BoxProps } from '@/components/atoms/Box';
import { useCatalogContext } from '@/hooks/contexts';

type CatalogListMoleculeOwnProps<T> = {
  children?: (value: T, index: number, array: T[]) => ReactNode;
};

type CatalogListMoleculeProps<T> = CatalogListMoleculeOwnProps<T> &
  Omit<BoxProps, keyof CatalogListMoleculeOwnProps<T>>;

const CatalogListMolecule = <T,>(
  { children, ...props }: CatalogListMoleculeProps<T>,
  ref: CatalogListMoleculeProps<T>['ref']
) => {
  const { items } = useCatalogContext<T>();

  if (!items.length) return null;

  return (
    <Box
      component='nav'
      ref={ref}
      {...props}
    >
      {children && items.map(children)}
    </Box>
  );
};

export default createPolymorphicComponent<'nav', CatalogListMoleculeProps<any>>(
  forwardRef(CatalogListMolecule)
);
export type { CatalogListMoleculeProps };
