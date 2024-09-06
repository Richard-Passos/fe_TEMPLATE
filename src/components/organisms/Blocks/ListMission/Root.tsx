import { ReactNode, forwardRef } from 'react';

import { Text } from '@/components/atoms';
import { TextProps } from '@/components/atoms/Text';
import { ListHorizontalScroll } from '@/components/molecules';
import {
  ListHorizontalScrollItemProps,
  ListHorizontalScrollRootProps
} from '@/components/molecules/ListHorizontalScroll';
import { cn } from '@/utils';

import CleanLayoutBlock, { CleanLayoutBlockProps } from '../Layout/Clean';

type ListMissionBlockOrganismOwnProps = {
  data: {
    items: { id: string; text: ReactNode; separator: ReactNode }[];
    description: ReactNode;
  };
  listProps?: Partial<ListHorizontalScrollRootProps>;
  listItemProps?: Partial<ListHorizontalScrollItemProps>;
  descriptionProps?: Partial<TextProps>;
};

type ListMissionBlockOrganismProps = ListMissionBlockOrganismOwnProps &
  Omit<CleanLayoutBlockProps, keyof ListMissionBlockOrganismOwnProps>;

const ListMissionBlockOrganism = (
  {
    data,
    listProps,
    listItemProps,
    descriptionProps,
    ...props
  }: ListMissionBlockOrganismProps,
  ref: ListMissionBlockOrganismProps['ref']
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
            key={item.id}
            order={1}
            {...listItemProps}
            className={cn(
              'py-xl font-semibold uppercase [--gap:theme(spacing.sm)] *:*:[--rotate:calc(var(--x)*(360deg/12.5))] odd:-rotate-1 even:rotate-1',
              listItemProps?.className
            )}
          >
            <span>{item.text}</span>

            <div className='size-[1em] rotate-[--rotate]'>{item.separator}</div>

            <span className='opacity-30 dark:opacity-10'>{item.text}</span>

            <div className='size-[1em] opacity-30 rotate-[--rotate] dark:opacity-10 max-sm:hidden'>
              {item.separator}
            </div>

            <span className='opacity-30 dark:opacity-10 max-sm:hidden'>
              {item.text}
            </span>

            <div className='size-[1em] rotate-[--rotate]'>{item.separator}</div>
          </ListHorizontalScroll.Item>
        ))}
      </ListHorizontalScroll.Root>

      <Text
        {...descriptionProps}
        className={cn(
          'mt-xl w-9/10 max-w-xl text-center leading-relaxed text-dimmed max-sm:text-sm',
          descriptionProps?.className
        )}
      >
        {data.description}
      </Text>
    </CleanLayoutBlock>
  );
};

export default forwardRef(ListMissionBlockOrganism);
export type { ListMissionBlockOrganismProps };
