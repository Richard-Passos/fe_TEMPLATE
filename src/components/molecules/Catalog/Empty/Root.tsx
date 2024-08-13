'use client';

import { createPolymorphicComponent } from '@mantine/core';
import { forwardRef } from 'react';

import Box, { BoxProps } from '@/components/atoms/Box';
import { useCatalogContext } from '@/hooks/contexts';

type CatalogEmptyMoleculeOwnProps = {};

type CatalogEmptyMoleculeProps = CatalogEmptyMoleculeOwnProps &
  Omit<BoxProps, keyof CatalogEmptyMoleculeOwnProps>;

const CatalogEmptyMolecule = <T,>(
  props: CatalogEmptyMoleculeProps,
  ref: CatalogEmptyMoleculeProps['ref']
) => {
  const { isEmpty } = useCatalogContext<T>();

  if (!isEmpty) return null;

  return (
    <Box
      ref={ref}
      {...props}
    />
  );
};

export default createPolymorphicComponent<'div', CatalogEmptyMoleculeProps>(
  forwardRef(CatalogEmptyMolecule)
);
export type { CatalogEmptyMoleculeProps };
