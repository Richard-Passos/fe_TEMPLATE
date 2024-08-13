'use client';

import { useSearchParams } from 'next/navigation';
import { forwardRef } from 'react';

import Button, { ButtonProps } from '@/components/atoms/Button';
import { useSetSearchParams } from '@/hooks';
import { normId } from '@/utils';

type CatalogButtonFilterMoleculeOwnProps = {
  query: { name: string; value: string };
};

type CatalogButtonFilterMoleculeProps = CatalogButtonFilterMoleculeOwnProps &
  Omit<ButtonProps, keyof CatalogButtonFilterMoleculeOwnProps>;

const CatalogButtonFilterMolecule = (
  { query, className, ...props }: CatalogButtonFilterMoleculeProps,
  ref: CatalogButtonFilterMoleculeProps['ref']
) => {
  const searchParams = useSearchParams(),
    setSearchParams = useSetSearchParams();

  const { name, value } = { ...query, name: normId(query.name) };

  const isActive = searchParams.get(name) === value;

  return (
    <Button
      data-state={isActive ? 'active' : 'inactive'}
      ref={ref}
      {...props}
      onClick={(ev) => {
        setSearchParams([{ key: name, value: !isActive ? value : '' }]);

        props.onClick?.(ev);
      }}
    />
  );
};

export default forwardRef(CatalogButtonFilterMolecule);
export type { CatalogButtonFilterMoleculeProps };
