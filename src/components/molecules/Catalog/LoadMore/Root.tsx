'use client';

import { forwardRef } from 'react';

import Slot, { SlotProps } from '@/components/atoms/Slot';
import { useSetSearchParams } from '@/hooks';
import { useCatalogContext } from '@/hooks/contexts';

type CatalogLoadMoreMoleculeOwnProps = {};

type CatalogLoadMoreMoleculeProps = CatalogLoadMoreMoleculeOwnProps &
  Omit<SlotProps, keyof CatalogLoadMoreMoleculeOwnProps>;

const CatalogLoadMoreMolecule = <T,>(
  props: CatalogLoadMoreMoleculeProps,
  ref: CatalogLoadMoreMoleculeProps['ref']
) => {
  const { page, isLastPage } = useCatalogContext<T>(),
    setSearchParams = useSetSearchParams();

  if (isLastPage) return null;

  return (
    <Slot
      ref={ref}
      {...props}
      onClick={async (ev) => {
        setSearchParams([{ key: 'page', value: `${page + 1}` }]);

        props.onClick?.(ev);
      }}
    />
  );
};

export default forwardRef(CatalogLoadMoreMolecule);
export type { CatalogLoadMoreMoleculeProps };
