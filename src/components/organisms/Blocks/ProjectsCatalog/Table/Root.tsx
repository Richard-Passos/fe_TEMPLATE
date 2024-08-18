'use client';

import { forwardRef } from 'react';

import { CatalogList, CatalogListProps } from '@/components/molecules/Catalog';
import { TableProjectCard } from '@/components/organisms/Cards/Project';
import { cn } from '@/utils';

type ProjectsCatalogTableBlockOrganismOwnProps = {};

type ProjectsCatalogTableBlockOrganismProps<T> =
  ProjectsCatalogTableBlockOrganismOwnProps &
    Omit<CatalogListProps<T>, keyof ProjectsCatalogTableBlockOrganismOwnProps>;

const ProjectsCatalogTableBlockOrganism = <T,>(
  { className, ...props }: ProjectsCatalogTableBlockOrganismProps<T>,
  ref: ProjectsCatalogTableBlockOrganismProps<T>['ref']
) => {
  return (
    <CatalogList
      className={cn('flex flex-col gap-xs', className)}
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

export default forwardRef(ProjectsCatalogTableBlockOrganism);
export type { ProjectsCatalogTableBlockOrganismProps };
