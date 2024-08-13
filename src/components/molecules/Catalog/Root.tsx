import { createPolymorphicComponent } from '@mantine/core';
import { forwardRef } from 'react';

import CatalogProvider, { CatalogProviderProps } from '@/Providers/Catalog';
import Box, { BoxProps } from '@/components/atoms/Box';

type CatalogMoleculeOwnProps = {};

type CatalogMoleculeProps = CatalogMoleculeOwnProps &
  Omit<BoxProps, keyof CatalogMoleculeOwnProps>;

const CatalogMolecule = forwardRef(
  (props: CatalogMoleculeProps, ref: CatalogMoleculeProps['ref']) => {
    return (
      <Box
        component='section'
        ref={ref}
        {...props}
      />
    );
  }
);
CatalogMolecule.displayName = 'CatalogMolecule';

type CatalogMoleculeWithProviderOwnProps = {
  ref?: CatalogMoleculeProps['ref'];
};

type CatalogMoleculeWithProviderProps<T> = CatalogMoleculeWithProviderOwnProps &
  Omit<
    CatalogProviderProps<T> & CatalogMoleculeProps,
    keyof CatalogMoleculeWithProviderOwnProps
  >;

const CatalogMoleculeWithProvider = <T,>(
  { items, url, ...props }: CatalogMoleculeWithProviderProps<T>,
  ref: CatalogMoleculeWithProviderProps<T>['ref']
) => {
  return (
    <CatalogProvider
      items={items}
      url={url}
    >
      <CatalogMolecule
        ref={ref}
        {...props}
      />
    </CatalogProvider>
  );
};

export default createPolymorphicComponent<
  'section',
  CatalogMoleculeWithProviderProps<any>
>(forwardRef(CatalogMoleculeWithProvider));
export type { CatalogMoleculeProps, CatalogMoleculeWithProvider };
