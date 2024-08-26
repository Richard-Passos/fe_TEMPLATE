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
      className={cn('group/list', className)}
      ref={ref}
      {...props}
    >
      {({ slug, ...data }, i) => (
        <li
          className='py-[calc(theme(spacing.xs)/2)] first:pt-0 last:pb-0'
          key={slug}
        >
          <TableProjectCard
            data={{ index: i, ...data }}
            href={`projects/${slug}`}
          />
        </li>
      )}
    </CatalogList>
  );
};

export default forwardRef(ProjectsCatalogTableBlockOrganism);
export type { ProjectsCatalogTableBlockOrganismProps };
