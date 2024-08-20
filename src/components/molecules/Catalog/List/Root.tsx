'use client';

import { createPolymorphicComponent } from '@mantine/core';
import { ReactNode, forwardRef } from 'react';

import Box, { BoxProps } from '@/components/atoms/Box';
import { useCatalogContext } from '@/hooks/contexts';
import { PolymorphicRef } from '@/types';
import { cn } from '@/utils';

type CatalogListMoleculeChildren<T> = (
  value: T,
  index: number,
  array: T[]
) => ReactNode;

type CatalogListMoleculeOwnProps<T> = {
  children?: ReactNode | CatalogListMoleculeChildren<T>;
  ref?: PolymorphicRef<'ul'> & BoxProps['ref'];
};

type CatalogListMoleculeProps<T> = CatalogListMoleculeOwnProps<T> &
  Omit<BoxProps, keyof CatalogListMoleculeOwnProps<T>>;

const CatalogListMolecule = <T,>(
  { className, children, ...props }: CatalogListMoleculeProps<T>,
  ref: CatalogListMoleculeProps<T>['ref']
) => {
  const { items } = useCatalogContext<T>();

  if (!items.length) return null;

  return (
    <Box
      className={cn('m-0 list-none p-0', className)}
      component='ul'
      ref={ref}
      {...props}
    >
      {typeof children === 'function' ? items.map(children) : children}
    </Box>
  );
};

export default createPolymorphicComponent<'ul', CatalogListMoleculeProps<any>>(
  forwardRef(CatalogListMolecule)
);
export type { CatalogListMoleculeProps, CatalogListMoleculeChildren };
