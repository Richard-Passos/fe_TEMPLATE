import { forwardRef } from 'react';

import { Card, Catalog } from '@/components/molecules';
import {
  CatalogEmptyProps,
  CatalogRootProps
} from '@/components/molecules/Catalog';
import { Project } from '@/types';
import { cn, renderComp, serialize } from '@/utils';
import { Node } from '@/utils/serialize';

import PrimaryLayoutBlock, { PrimaryLayoutBlockProps } from '../Layout/Primary';
import ProjectsCatalogGridBlock, {
  ProjectsCatalogGridBlockProps
} from './Grid';
import ProjectsCatalogTableBlock, {
  ProjectsCatalogTableBlockProps
} from './Table';

type ProjectsCatalogBlockOrganismOwnProps = {
  data: PrimaryLayoutBlockProps['data'] & {
    empty: Node[];
    items: Project[];
  };
  catalogProps?: Partial<CatalogRootProps>;
  descriptionProps?: Partial<any>;
  emptyProps?: Partial<CatalogEmptyProps>;
  tableProps?: Partial<ProjectsCatalogTableBlockProps>;
  gridProps?: Partial<ProjectsCatalogGridBlockProps>;
};

type ProjectsCatalogBlockOrganismProps = ProjectsCatalogBlockOrganismOwnProps &
  Omit<PrimaryLayoutBlockProps, keyof ProjectsCatalogBlockOrganismOwnProps>;

const ProjectsCatalogBlockOrganism = (
  {
    data,
    catalogProps,
    descriptionProps,
    emptyProps,
    tableProps,
    gridProps,
    ...props
  }: ProjectsCatalogBlockOrganismProps,
  ref: ProjectsCatalogBlockOrganismProps['ref']
) => {
  return (
    <PrimaryLayoutBlock
      data={{
        title: data.title
      }}
      ref={ref}
      {...props}
    >
      <Catalog.Root
        items={data.items}
        {...catalogProps}
        className={cn(
          `flex w-9/10 max-w-screen-xl gap-md max-md:flex-col md:justify-end`,
          catalogProps?.className
        )}
      >
        <section className={`w-full max-w-48 md:max-w-36`}>
          {renderComp(
            serialize(data.description ?? [], {
              paragraph: {
                className: 'text-dimmed *:text-text'
              }
            }),
            [!!data.description?.length]
          )}
        </section>

        <div className='flex max-w-screen-md grow flex-col items-center'>
          <Catalog.Empty
            {...emptyProps}
            className={cn('flex w-full', emptyProps?.className)}
          >
            <Card.Root
              className={`min-h-52 items-center justify-center text-center`}
            >
              {serialize(data.empty)}
            </Card.Root>
          </Catalog.Empty>

          <ProjectsCatalogTableBlock
            {...tableProps}
            className={cn(
              `relative z-20 w-full max-sm:hidden`,
              tableProps?.className
            )}
          />

          <ProjectsCatalogGridBlock
            {...gridProps}
            className={cn(`ml-auto w-full sm:hidden`, gridProps?.className)}
          />
        </div>
      </Catalog.Root>
    </PrimaryLayoutBlock>
  );
};

export default forwardRef(ProjectsCatalogBlockOrganism);
export type { ProjectsCatalogBlockOrganismProps };
