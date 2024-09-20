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
          `group/item relative flex items-center justify-center font-normal text-current focus-visible:outline-0`,
          className
        )}
        ref={ref}
        underline='never'
        {...props}
      >
        <CardRoot
          className={cn(
            `flex-row items-start gap-xs px-[7.5%] py-xl transition-[scale,opacity] duration-300 ease-backOut group-focus-visible/item:outline`,

            `group-hover/list:scale-x-90 group-hover/list:[>:has(+:hover)_&]:scale-x-95 group-hover/list:[>:hover+*_&]:scale-x-95 group-hover/list:[>:hover_&]:scale-100`,

            'group-hover/list:[>:not(:hover)_&]:opacity-50'
          )}
        >
          <Text
            className={`relative shrink-0 text-sm font-semibold text-dimmed translate-y-0.5`}
          >
            <span
              aria-hidden
              className='opacity-0'
            >
              00/
            </span>

            <span className='absolute right-0'>
              {`${data.index + 1}`.padStart(2, '0')}/
            </span>
          </Text>

          <div className='flex grow items-center gap-x-sm gap-y-xs'>
            <Title
              className={`mb-auto shrink-0 basis-full overflow-hidden text-ellipsis text-nowrap sm:basis-1/2`}
              order={4}
            >
              {data.title}
            </Title>

            <Text
              className={`line-clamp-2 grow break-words text-sm font-medium lowercase sm:text-end`}
            >
              {values(data.roles)
                .toSorted((a, b) => a.localeCompare(b))
                .join(' & ')}
            </Text>

            {renderComp(
              <Text
                className={`shrink-0 basis-1/3 text-end text-sm font-medium sm:basis-1/12`}
              >
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
            <div
              className={`relative aspect-square w-72 overflow-hidden rounded-lg bg-gray-1 opacity-0 transition-opacity group-hover/item:opacity-100 dark:bg-dark-6`}
            >
              <Image
                alt={data.thumbnail.alt}
                className='object-cover'
                fill
                sizes='100vw, (min-width: 640px) 50vw, (min-width: 768px) 33vw'
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
