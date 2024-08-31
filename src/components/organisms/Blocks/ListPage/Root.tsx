import { ReactNode, forwardRef } from 'react';

import { Action, ListHorizontalScroll } from '@/components/molecules';
import { ActionProps } from '@/components/molecules/Action';
import { ListHorizontalScrollRootProps } from '@/components/molecules/ListHorizontalScroll';
import { cn } from '@/utils';

import CleanLayoutBlock, { CleanLayoutBlockProps } from '../Layout/Clean';

type ListPageBlockOrganismOwnProps = {
  data: {
    items: { id: string; text: ReactNode; separator: ReactNode }[];
    action: {
      href: string;
      label: string;
    };
  };
  listProps?: Partial<ListHorizontalScrollRootProps>;
  actionProps?: Partial<ActionProps>;
};

type ListPageBlockOrganismProps = ListPageBlockOrganismOwnProps &
  Omit<CleanLayoutBlockProps, keyof ListPageBlockOrganismOwnProps>;

const ListPageBlockOrganism = (
  { data, listProps, actionProps, ...props }: ListPageBlockOrganismProps,
  ref: ListPageBlockOrganismProps['ref']
) => {
  return (
    <CleanLayoutBlock
      ref={ref}
      {...props}
    >
      <ListHorizontalScroll.Root {...listProps}>
        {data.items.map((item, i) => (
          <ListHorizontalScroll.Item
            baseVelocity={(1.5 + 0.25 * i) * (i % 2 === 0 ? 1 : -1)}
            className='text-2xl uppercase [--gap:theme(spacing.sm)] sm:text-3xl'
            key={item.id}
          >
            <span>{item.text}</span>

            <span>{item.separator}</span>

            <span className='opacity-30 dark:opacity-10'>{item.text}</span>

            <span className='opacity-30 dark:opacity-10 max-sm:hidden'>
              {item.separator}
            </span>

            <span className='opacity-30 dark:opacity-10 max-sm:hidden'>
              {item.text}
            </span>

            <span>{item.separator}</span>
          </ListHorizontalScroll.Item>
        ))}
      </ListHorizontalScroll.Root>

      <Action
        href={data.action.href}
        size='md'
        variant='default'
        {...actionProps}
        className={cn('mt-xl', actionProps?.className)}
      >
        {data.action.label}
      </Action>
    </CleanLayoutBlock>
  );
};

export default forwardRef(ListPageBlockOrganism);
export type { ListPageBlockOrganismProps };
