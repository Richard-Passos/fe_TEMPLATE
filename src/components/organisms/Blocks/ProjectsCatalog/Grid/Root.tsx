'use client';

import { forwardRef } from 'react';

import { CatalogList, CatalogListProps } from '@/components/molecules/Catalog';
import { GridProjectCard } from '@/components/organisms/Cards/Project';
import { cn } from '@/utils';

type ProjectsCatalogGridBlockOrganismOwnProps = {};

type ProjectsCatalogGridBlockOrganismProps<T> =
  ProjectsCatalogGridBlockOrganismOwnProps &
    Omit<CatalogListProps<T>, keyof ProjectsCatalogGridBlockOrganismOwnProps>;

const ProjectsCatalogGridBlockOrganism = <T,>(
  { className, ...props }: ProjectsCatalogGridBlockOrganismProps<T>,
  ref: ProjectsCatalogGridBlockOrganismProps<T>['ref']
) => {
  return (
    <CatalogList
      className={cn('flex flex-col gap-xs', className)}
      ref={ref}
      {...props}
    >
      {({ slug, ...data }, i) => (
        <li key={slug}>
          <GridProjectCard
            data={{ index: i, ...data }}
            href={`projects/${slug}`}
          />
        </li>
      )}
    </CatalogList>
  );
};

export default forwardRef(ProjectsCatalogGridBlockOrganism);
export type { ProjectsCatalogGridBlockOrganismProps };
