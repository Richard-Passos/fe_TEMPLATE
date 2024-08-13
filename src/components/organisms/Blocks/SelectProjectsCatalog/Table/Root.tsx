'use client';

import { forwardRef } from 'react';

import { CatalogList, CatalogListProps } from '@/components/molecules/Catalog';
import { TableProjectCard } from '@/components/organisms/Cards/Project';

type SelectProjectsCatalogListBlockOrganismOwnProps = {};

type SelectProjectsCatalogListBlockOrganismProps<T> =
  SelectProjectsCatalogListBlockOrganismOwnProps &
    Omit<
      CatalogListProps<T>,
      keyof SelectProjectsCatalogListBlockOrganismOwnProps
    >;

const SelectProjectsCatalogListBlockOrganism = <T,>(
  props: SelectProjectsCatalogListBlockOrganismProps<T>,
  ref: SelectProjectsCatalogListBlockOrganismProps<T>['ref']
) => {
  return (
    <CatalogList
      ref={ref}
      {...props}
    >
      {({ slug, ...data }, i) => (
        <TableProjectCard
          data={{ index: i, ...data }}
          href={`projects/${slug}`}
          key={data.title}
        />
      )}
    </CatalogList>
  );
};

export default forwardRef(SelectProjectsCatalogListBlockOrganism);
export type { SelectProjectsCatalogListBlockOrganismProps };
