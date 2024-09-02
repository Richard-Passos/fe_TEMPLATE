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
      className={cn(
        'grid w-full max-w-sm gap-xs sm:max-w-3xl sm:grid-cols-2',
        className
      )}
      ref={ref}
      {...props}
    >
      {({ slug, ...data }) => (
        <li
          className='h-fit sm:even:mt-2xl sm:[&:not(:last-child)]:even:-mb-2xl'
          key={slug}
        >
          <GridProjectCard
            data={data}
            href={`projects/${slug}`}
          />
        </li>
      )}
    </CatalogList>
  );
};

export default forwardRef(ProjectsCatalogGridBlockOrganism);
export type { ProjectsCatalogGridBlockOrganismProps };
