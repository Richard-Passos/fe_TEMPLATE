'use client';

import { forwardRef } from 'react';

import { CatalogList, CatalogListProps } from '@/components/molecules/Catalog';
import { TableProjectCard } from '@/components/organisms/Cards/Project';

type SelectProjectsCatalogTableBlockOrganismOwnProps = {};

type SelectProjectsCatalogTableBlockOrganismProps<T> =
  SelectProjectsCatalogTableBlockOrganismOwnProps &
    Omit<
      CatalogListProps<T>,
      keyof SelectProjectsCatalogTableBlockOrganismOwnProps
    >;

const SelectProjectsCatalogTableBlockOrganism = <T,>(
  props: SelectProjectsCatalogTableBlockOrganismProps<T>,
  ref: SelectProjectsCatalogTableBlockOrganismProps<T>['ref']
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

export default forwardRef(SelectProjectsCatalogTableBlockOrganism);
export type { SelectProjectsCatalogTableBlockOrganismProps };
