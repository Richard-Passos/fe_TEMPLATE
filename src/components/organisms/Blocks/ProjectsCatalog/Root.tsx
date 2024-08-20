import { ReactNode, forwardRef } from 'react';

import { Text, Title } from '@/components/atoms';
import { TitleProps } from '@/components/atoms/Title';
import { Action, Catalog } from '@/components/molecules';
import { ActionProps } from '@/components/molecules/Action';
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
    subtitle?: ReactNode;
    empty: ReactNode;
    items: any[];
    action: {
      label: ReactNode;
    };
  };
  catalogProps?: Partial<CatalogRootProps>;
  subtitleProps?: Partial<TitleProps>;
  emptyProps?: Partial<CatalogEmptyProps>;
  tableProps?: Partial<ProjectsCatalogTableBlockProps<unknown>>;
  gridProps?: Partial<ProjectsCatalogGridBlockProps<unknown>>;
  actionProps?: Partial<ActionProps>;
};

type ProjectsCatalogBlockOrganismProps = ProjectsCatalogBlockOrganismOwnProps &
  Omit<PrimaryLayoutBlockProps, keyof ProjectsCatalogBlockOrganismOwnProps>;

const ProjectsCatalogBlockOrganism = (
  {
    data,
    catalogProps,
    subtitleProps,
    emptyProps,
    tableProps,
    gridProps,
    actionProps,
    ...props
  }: ProjectsCatalogBlockOrganismProps,
  ref: ProjectsCatalogBlockOrganismProps['ref']
) => {
  return (
    <PrimaryLayoutBlock
      data={{
        title: data.title,
        description: data.description
      }}
      ref={ref}
      {...props}
    >
      <Catalog.Root
        items={data.items}
        {...catalogProps}
        className={cn(
          'grid w-9/10 max-w-screen-xl sm:grid-cols-12',
          catalogProps?.className
        )}
      >
        <div className='size-full max-sm:mb-md sm:col-span-4'>
          {renderComp(
            <Title
              className='sticky top-xl text-dimmed'
              component='h3'
              order={6}
              {...subtitleProps}
            >
              {data.subtitle}
            </Title>,
            [data.subtitle]
          )}
        </div>

        <div className='flex flex-col items-center sm:col-span-8'>
          <Catalog.Empty {...emptyProps}>
            <Text className='text-center sm:max-w-2xl'>{data.empty}</Text>
          </Catalog.Empty>

          <ProjectsCatalogTableBlock
            {...tableProps}
            className={cn(
              'group relative z-20 w-full max-sm:hidden',
              tableProps?.className
            )}
          />

          <ProjectsCatalogGridBlock
            {...gridProps}
            className={cn('w-full sm:hidden', gridProps?.className)}
          />
        </div>

        <div className='mt-xl flex justify-center sm:col-span-full'>
          <Action
            href='/projects'
            size='md'
            variant='default'
            {...actionProps}
            className={cn('sm:ml-auto', actionProps?.className)}
          >
            {data.action.label}
          </Action>
        </div>
      </Catalog.Root>
    </PrimaryLayoutBlock>
  );
};

export default forwardRef(ProjectsCatalogBlockOrganism);
export type { ProjectsCatalogBlockOrganismProps };
