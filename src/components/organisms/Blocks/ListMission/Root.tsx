import { forwardRef } from 'react';

import { ListHorizontalScroll } from '@/components/molecules';
import serialize, { Node } from '@/utils/serialize';

import CleanLayoutBlock, { CleanLayoutBlockProps } from '../Layout/Clean';

type ListMissionBlockOrganismOwnProps = {
  data: {
    items: { id: string; text: Node[]; separator: Node[] }[];
    description: Node[];
  };
};

type ListMissionBlockOrganismProps = ListMissionBlockOrganismOwnProps &
  Omit<CleanLayoutBlockProps, keyof ListMissionBlockOrganismOwnProps>;

const ListMissionBlockOrganism = (
  { data, ...props }: ListMissionBlockOrganismProps,
  ref: ListMissionBlockOrganismProps['ref']
) => {
  return (
    <CleanLayoutBlock
      ref={ref}
      {...props}
    >
      <ListHorizontalScroll.Root>
        {data.items.map((item, i) => {
          const text = serialize(item.text),
            separator = serialize(item.separator);

          return (
            <ListHorizontalScroll.Item
              baseVelocity={(1.5 + 0.25 * i) * (i % 2 === 0 ? 1 : -1)}
              key={item.id}
              order={1}
              className='py-xl font-semibold uppercase [--gap:theme(spacing.sm)] *:*:[--rotate:calc(var(--x)*(360deg/12.5))] odd:-rotate-1 even:rotate-1'
            >
              <span>{text}</span>

              <div className='size-[1em] rotate-[--rotate]'>{separator}</div>

              <span className='opacity-30 dark:opacity-10'>{text}</span>

              <div className='size-[1em] opacity-30 rotate-[--rotate] dark:opacity-10 max-sm:hidden'>
                {separator}
              </div>

              <span className='opacity-30 dark:opacity-10 max-sm:hidden'>
                {text}
              </span>

              <div className='size-[1em] rotate-[--rotate]'>{separator}</div>
            </ListHorizontalScroll.Item>
          );
        })}
      </ListHorizontalScroll.Root>

      <section className='mt-xl w-9/10 max-w-xl text-center'>
        {serialize(data.description, {
          paragraph: {
            className: 'leading-relaxed text-dimmed max-sm:text-sm *:text-text'
          }
        })}
      </section>
    </CleanLayoutBlock>
  );
};

export default forwardRef(ListMissionBlockOrganism);
export type { ListMissionBlockOrganismProps };
