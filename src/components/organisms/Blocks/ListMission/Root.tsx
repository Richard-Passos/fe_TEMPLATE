import { ReactNode, forwardRef } from 'react';

import { Icon, Text } from '@/components/atoms';
import { ListHorizontalScroll } from '@/components/molecules';
import { ActionProps } from '@/components/molecules/Action';
import { ListHorizontalScrollRootProps } from '@/components/molecules/ListHorizontalScroll';
import { cn } from '@/utils';

import CleanLayoutBlock, { CleanLayoutBlockProps } from '../Layout/Clean';

type ListMissionBlockOrganismOwnProps = {
  data: {
    items: { text: string; icon: string }[];
    description: ReactNode;
  };
  listProps?: Partial<ListHorizontalScrollRootProps>;
  actionProps?: Partial<ActionProps>;
};

type ListMissionBlockOrganismProps = ListMissionBlockOrganismOwnProps &
  Omit<CleanLayoutBlockProps, keyof ListMissionBlockOrganismOwnProps>;

const ListMissionBlockOrganism = (
  {
    data,
    className,
    listProps,
    actionProps,
    ...props
  }: ListMissionBlockOrganismProps,
  ref: ListMissionBlockOrganismProps['ref']
) => {
  return (
    <CleanLayoutBlock
      className={cn('min-h-fit overflow-x-clip 2xl:min-h-bounds', className)}
      ref={ref}
      {...props}
    >
      <ListHorizontalScroll.Root {...listProps}>
        {data.items.map((item, i) => (
          <ListHorizontalScroll.Item
            baseVelocity={(1.5 + 0.25 * i) * (i % 2 === 0 ? 1 : -1)}
            className='py-xl [--gap:theme(spacing.sm)] *:*:[--rotate:calc(var(--x)*(360deg/12.5))] odd:-rotate-1 even:rotate-1'
            key={item.text + item.icon}
            order={2}
          >
            <span>{item.text}</span>

            <div className='size-[1em] rotate-[--rotate]'>
              <Icon src={item.icon} />
            </div>

            <span className='opacity-30 dark:opacity-10'>{item.text}</span>

            <div className='size-[1em] rotate-[--rotate] opacity-30 dark:opacity-10 max-sm:hidden'>
              <Icon src={item.icon} />
            </div>

            <span className='opacity-30 dark:opacity-10 max-sm:hidden'>
              {item.text}
            </span>

            <div className='size-[1em] rotate-[--rotate]'>
              <Icon src={item.icon} />
            </div>
          </ListHorizontalScroll.Item>
        ))}
      </ListHorizontalScroll.Root>

      <Text className='mt-xl w-9/10 text-center leading-relaxed sm:max-w-xl'>
        {data.description}
      </Text>
    </CleanLayoutBlock>
  );
};

export default forwardRef(ListMissionBlockOrganism);
export type { ListMissionBlockOrganismProps };
