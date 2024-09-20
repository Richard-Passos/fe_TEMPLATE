'use client';

import { forwardRef } from 'react';

import CatalogList, {
  CatalogListRootProps
} from '@/components/molecules/Catalog/List';
import { TableProjectCard } from '@/components/organisms/Cards/Project';
import { Project } from '@/types';
import { cn } from '@/utils';

type ProjectsCatalogTableBlockOrganismOwnProps = {};

type ProjectsCatalogTableBlockOrganismProps =
  ProjectsCatalogTableBlockOrganismOwnProps &
    Omit<CatalogListRootProps, keyof ProjectsCatalogTableBlockOrganismOwnProps>;

const ProjectsCatalogTableBlockOrganism = (
  { className, ...props }: ProjectsCatalogTableBlockOrganismProps,
  ref: ProjectsCatalogTableBlockOrganismProps['ref']
) => {
  return (
    <CatalogList.Root
      className={cn('group/list', className)}
      ref={ref}
      {...props}
    >
      <CatalogList.Items<Project>>
        {(data, i) => (
          <li
            className={`py-[calc(theme(spacing.xs)/2)] first:pt-0 last:pb-0`}
            key={data.slug}
          >
            <TableProjectCard
              data={{ index: i, ...data }}
              href={`projects/${data.slug}`}
            />
          </li>
        )}
      </CatalogList.Items>
    </CatalogList.Root>
  );
};

export default forwardRef(ProjectsCatalogTableBlockOrganism);
export type { ProjectsCatalogTableBlockOrganismProps };
