import { forwardRef } from 'react';

import { Action, ListHorizontalScroll } from '@/components/molecules';
import { ActionProps } from '@/components/molecules/Action';
import { ListHorizontalScrollRootProps } from '@/components/molecules/ListHorizontalScroll';
import { cn } from '@/utils';

import CleanLayoutBlock, { CleanLayoutBlockProps } from '../Layout/Clean';

type ListPageBlockOrganismOwnProps = {
  data: {
    items: string[];
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
  {
    data,
    className,
    listProps,
    actionProps,
    ...props
  }: ListPageBlockOrganismProps,
  ref: ListPageBlockOrganismProps['ref']
) => {
  return (
    <CleanLayoutBlock
      className={cn('min-h-fit 2xl:min-h-bounds', className)}
      ref={ref}
      {...props}
    >
      <ListHorizontalScroll.Root {...listProps}>
        {data.items.map((item, i) => (
          <ListHorizontalScroll.Item
            baseVelocity={(1 + 0.35 * i) * (i % 2 === 0 ? 1 : -1)}
            className='[--gap:theme(spacing.sm)]'
            key={item}
            order={4}
          >
            <span>&nbsp;{item}</span>

            <span>&nbsp;·</span>

            <span className='opacity-30 dark:opacity-10'>&nbsp;{item}</span>

            <span className='opacity-30 dark:opacity-10 max-sm:hidden'>
              &nbsp;·
            </span>

            <span className='opacity-30 dark:opacity-10 max-sm:hidden'>
              &nbsp;{item}
            </span>

            <span>&nbsp;·</span>
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
