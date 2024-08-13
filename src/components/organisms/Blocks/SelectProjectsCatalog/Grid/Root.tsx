'use client';

import { forwardRef } from 'react';

import { CatalogList, CatalogListProps } from '@/components/molecules/Catalog';
import { GridProjectCard } from '@/components/organisms/Cards/Project';

type SelectProjectsCatalogGridBlockOrganismOwnProps = {};

type SelectProjectsCatalogGridBlockOrganismProps<T> =
  SelectProjectsCatalogGridBlockOrganismOwnProps &
    Omit<
      CatalogListProps<T>,
      keyof SelectProjectsCatalogGridBlockOrganismOwnProps
    >;

const SelectProjectsCatalogGridBlockOrganism = <T,>(
  props: SelectProjectsCatalogGridBlockOrganismProps<T>,
  ref: SelectProjectsCatalogGridBlockOrganismProps<T>['ref']
) => {
  return (
    <CatalogList
      ref={ref}
      {...props}
    >
      {({ slug, ...data }, i) => (
        <GridProjectCard
          data={{ index: i, ...data }}
          href={`projects/${slug}`}
          key={data.title}
        />
      )}
    </CatalogList>
  );
};

export default forwardRef(SelectProjectsCatalogGridBlockOrganism);
export type { SelectProjectsCatalogGridBlockOrganismProps };
