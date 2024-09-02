import { ReactNode, forwardRef } from 'react';

import { Text } from '@/components/atoms';
import { TextProps } from '@/components/atoms/Text';
import { Catalog } from '@/components/molecules';
import {
  CatalogEmptyProps,
  CatalogRootProps
} from '@/components/molecules/Catalog';
import { cn, renderComp } from '@/utils';

import PrimaryLayoutBlock, { PrimaryLayoutBlockProps } from '../Layout/Primary';
import ProjectsCatalogGridBlock, {
  ProjectsCatalogGridBlockProps
} from './Grid';
import ProjectsCatalogTableBlock, {
  ProjectsCatalogTableBlockProps
} from './Table';

type ProjectsCatalogBlockOrganismOwnProps = {
  data: PrimaryLayoutBlockProps['data'] & {
    description?: ReactNode;
    empty: ReactNode;
    items: any[];
  };
  catalogProps?: Partial<CatalogRootProps>;
  descriptionProps?: Partial<TextProps>;
  emptyProps?: Partial<CatalogEmptyProps>;
  tableProps?: Partial<ProjectsCatalogTableBlockProps<unknown>>;
  gridProps?: Partial<ProjectsCatalogGridBlockProps<unknown>>;
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
          'flex w-9/10 max-w-screen-xl gap-md max-md:flex-col md:justify-end',
          catalogProps?.className
        )}
      >
        {renderComp(
          <Text
            className='w-full max-w-48 text-dimmed md:max-w-36'
            {...descriptionProps}
          >
            {data.description}
          </Text>,
          [data.description]
        )}

        <div className='flex max-w-screen-md grow flex-col items-center'>
          <Catalog.Empty {...emptyProps}>
            <Text className='max-w-md text-center'>{data.empty}</Text>
          </Catalog.Empty>

          <ProjectsCatalogTableBlock
            {...tableProps}
            className={cn(
              'relative z-20 w-full max-sm:hidden',
              tableProps?.className
            )}
          />

          <ProjectsCatalogGridBlock
            {...gridProps}
            className={cn('w-full sm:hidden', gridProps?.className)}
          />
        </div>
      </Catalog.Root>
    </PrimaryLayoutBlock>
  );
};

export default forwardRef(ProjectsCatalogBlockOrganism);
export type { ProjectsCatalogBlockOrganismProps };
