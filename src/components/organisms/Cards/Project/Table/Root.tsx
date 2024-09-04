import { forwardRef } from 'react';

import { Image, Link, Magnetic, Text, Title } from '@/components/atoms';
import { LinkProps } from '@/components/atoms/Link';
import { CardRoot } from '@/components/molecules/Card';
import { Project } from '@/types';
import { cn, renderComp, values } from '@/utils';

type TableProjectCardOrganismOwnProps = {
  data: Project & { index: number };
};

type TableProjectCardOrganismProps = TableProjectCardOrganismOwnProps &
  Omit<LinkProps, keyof TableProjectCardOrganismOwnProps>;

const TableProjectCardOrganism = (
  { className, data, ...props }: TableProjectCardOrganismProps,
  ref: TableProjectCardOrganismProps['ref']
) => {
  return (
    <Magnetic.Container>
      <Link
        className={cn(
          'group/item relative flex items-center justify-center font-normal text-current focus-visible:outline-0',
          className
        )}
        ref={ref}
        underline='never'
        {...props}
      >
        <CardRoot
          className={cn(
            'flex-row items-center justify-center gap-xs px-[7.5%] py-xl transition-[scale,opacity] duration-300 ease-backOut group-focus-visible/item:outline',

            'group-hover/list:scale-x-90 group-hover/list:[>:has(+:hover)_&]:scale-x-95 group-hover/list:[>:hover+*_&]:scale-x-95 group-hover/list:[>:hover_&]:scale-100',

            'group-hover/list:[>:not(:hover)_&]:opacity-50'
          )}
        >
          <Text className='relative z-20 mb-auto inline-flex text-sm font-semibold text-dimmed translate-y-0.5'>
            {`${data.index + 1}`.padStart(2, '0')}/
          </Text>

          <div className='relative z-20 flex w-full flex-wrap items-start gap-x-sm gap-y-4 sm:items-center'>
            <Title
              className='basis-full sm:basis-1/2'
              order={4}
            >
              {data.title}
            </Title>

            <Text className='grow basis-2/3 overflow-hidden text-ellipsis text-sm font-medium lowercase sm:basis-0 sm:text-end'>
              {values(data.roles)
                .toSorted((a, b) => a.localeCompare(b))
                .join(' & ')}
            </Text>

            {renderComp(
              <Text className='grow basis-0 text-end text-sm font-semibold sm:text-end'>
                {data.year}
              </Text>,
              [data.year]
            )}
          </div>
        </CardRoot>

        <Magnetic.Root
          limit={{ x: 0.2, y: 0.2 }}
          smoothConfig={{
            damping: 15,
            stiffness: 150
          }}
        >
          <div className='pointer-events-none absolute z-10'>
            <div className='relative aspect-[1/1.1] w-72 overflow-hidden rounded-lg bg-gray-1 opacity-0 transition-opacity group-hover/item:opacity-100 dark:bg-dark-6'>
              <Image
                alt={data.thumbnail.alt}
                className='object-cover'
                fill
                src={data.thumbnail.src}
              />
            </div>
          </div>
        </Magnetic.Root>
      </Link>
    </Magnetic.Container>
  );
};

export default forwardRef(TableProjectCardOrganism);
export type { TableProjectCardOrganismProps };
