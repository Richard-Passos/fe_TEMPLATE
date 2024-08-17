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
import SelectProjectsCatalogGridBlock, {
  SelectProjectsCatalogGridBlockProps
} from './Grid';
import SelectProjectsCatalogTableBlock, {
  SelectProjectsCatalogTableBlockProps
} from './Table';

type SelectProjectsCatalogBlockOrganismOwnProps = {
  data: PrimaryLayoutBlockProps['data'] & {
    subtitle?: ReactNode;
    empty: ReactNode;
    action: {
      label: ReactNode;
    };
  };
  catalogProps?: Partial<CatalogRootProps>;
  subtitleProps?: Partial<TitleProps>;
  emptyProps?: Partial<CatalogEmptyProps>;
  tableProps?: Partial<SelectProjectsCatalogTableBlockProps<unknown>>;
  gridProps?: Partial<SelectProjectsCatalogGridBlockProps<unknown>>;
  actionProps?: Partial<ActionProps>;
};

type SelectProjectsCatalogBlockOrganismProps =
  SelectProjectsCatalogBlockOrganismOwnProps &
    Omit<
      PrimaryLayoutBlockProps,
      keyof SelectProjectsCatalogBlockOrganismOwnProps
    >;

const SelectProjectsCatalogBlockOrganism = (
  {
    data,
    catalogProps,
    subtitleProps,
    emptyProps,
    tableProps,
    gridProps,
    actionProps,
    ...props
  }: SelectProjectsCatalogBlockOrganismProps,
  ref: SelectProjectsCatalogBlockOrganismProps['ref']
) => {
  const items = Array.from(Array(5).keys()).map((i) => ({
    slug: `title-${i}`,
    title: `Title - ${i}`,
    roles: ['design', 'development'],
    image: {
      src: `/images/project-${i.toString().padStart(2, '0')}.jpg`,
      alt: ''
    }
  }));

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
        items={items}
        {...catalogProps}
        className={cn(
          'mt-2xl flex w-9/10 max-w-screen-lg flex-col items-center',
          catalogProps?.className
        )}
      >
        {renderComp(
          <Title
            className='mb-lg mr-auto text-dimmed'
            component='h3'
            order={6}
            {...subtitleProps}
          >
            {data.subtitle}
          </Title>,
          [data.subtitle]
        )}

        <Catalog.Empty {...emptyProps}>
          <Text className='text-center sm:max-w-2xl'>{data.empty}</Text>
        </Catalog.Empty>

        <SelectProjectsCatalogTableBlock
          {...tableProps}
          className={cn(
            'group relative z-20 w-full max-sm:hidden',
            tableProps?.className
          )}
        />

        <SelectProjectsCatalogGridBlock
          {...gridProps}
          className={cn('w-full sm:hidden', gridProps?.className)}
        />

        <Action
          href='projects'
          size='md'
          variant='default'
          {...actionProps}
          className={cn('mt-xl', actionProps?.className)}
        >
          {data.action.label}
        </Action>
      </Catalog.Root>
    </PrimaryLayoutBlock>
  );
};

export default forwardRef(SelectProjectsCatalogBlockOrganism);
export type { SelectProjectsCatalogBlockOrganismProps };
