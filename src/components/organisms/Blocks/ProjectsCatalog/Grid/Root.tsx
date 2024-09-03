'use client';

import { forwardRef } from 'react';

import CatalogList, {
  CatalogListRootProps
} from '@/components/molecules/Catalog/List';
import { GridProjectCard } from '@/components/organisms/Cards/Project';
import { Project } from '@/types';
import { cn } from '@/utils';

type ProjectsCatalogGridBlockOrganismOwnProps = {};

type ProjectsCatalogGridBlockOrganismProps =
  ProjectsCatalogGridBlockOrganismOwnProps &
    Omit<CatalogListRootProps, keyof ProjectsCatalogGridBlockOrganismOwnProps>;

const ProjectsCatalogGridBlockOrganism = (
  { className, ...props }: ProjectsCatalogGridBlockOrganismProps,
  ref: ProjectsCatalogGridBlockOrganismProps['ref']
) => {
  return (
    <CatalogList.Root
      className={cn(
        'grid w-full max-w-sm gap-xs sm:max-w-3xl sm:grid-cols-2',
        className
      )}
      ref={ref}
      {...props}
    >
      <CatalogList.Items<Project>>
        {(data) => (
          <li
            className='h-fit sm:even:mt-2xl sm:[&:not(:last-child)]:even:-mb-2xl'
            key={data.slug}
          >
            <GridProjectCard
              data={data}
              href={`projects/${data.slug}`}
            />
          </li>
        )}
      </CatalogList.Items>
    </CatalogList.Root>
  );
};

export default forwardRef(ProjectsCatalogGridBlockOrganism);
export type { ProjectsCatalogGridBlockOrganismProps };
