import { forwardRef } from 'react';

import { Image, Link, Text, Title } from '@/components/atoms';
import { LinkProps } from '@/components/atoms/Link';
import { cn, renderComp } from '@/utils';

import TableProjectCardMagneticContainer from './MagneticContainer';

type TableProjectCardOrganismOwnProps = {
  data: {
    index: number;
    title: string;
    roles: string[];
    image: {
      src: string;
      alt: string;
    };
    year?: number;
  };
};

type TableProjectCardOrganismProps = TableProjectCardOrganismOwnProps &
  Omit<LinkProps, keyof TableProjectCardOrganismOwnProps>;

const TableProjectCardOrganism = (
  { className, data, ...props }: TableProjectCardOrganismProps,
  ref: TableProjectCardOrganismProps['ref']
) => {
  return (
    <Link
      className={cn(
        'group/item relative font-normal text-current no-underline hover:z-10 focus-visible:outline',
        className
      )}
      ref={ref}
      {...props}
    >
      <TableProjectCardMagneticContainer
        box={
          <div className='size-72 scale-90 overflow-hidden rounded-lg bg-gray-1 opacity-0 transition-[transform,opacity] group-hover/item:scale-100 group-hover/item:opacity-100 dark:bg-dark-7'>
            <Image
              alt={data.image.alt}
              className='object-cover'
              height={288}
              src={data.image.src}
              width={288}
            />
          </div>
        }
        className='top-px -mt-px flex gap-xs border-x-0 border-y border-solid border-border px-[7.5%] py-xl transition-[transform,opacity] [--opacity:.25] dark:[--opacity:.05] group-hover:[*:not(:hover)>&]:scale-x-95 group-hover:[*:not(:hover)>&]:opacity-[--opacity]'
      >
        <Text className='relative z-10 mb-auto inline-flex translate-y-0.5 text-sm font-semibold text-dimmed'>
          {`${data.index + 1}`.padStart(2, '0')}/
        </Text>

        <div className='relative z-10 flex w-full flex-wrap items-start gap-x-sm gap-y-4 sm:items-center'>
          <Title
            className='basis-full uppercase sm:basis-1/2'
            component='h4'
            order={3}
          >
            {data.title}
          </Title>

          <Text className='grow basis-2/3 overflow-hidden text-ellipsis text-sm font-medium lowercase sm:basis-0 sm:text-end'>
            {data.roles.toSorted((a, b) => a.localeCompare(b)).join(' & ')}
          </Text>

          {renderComp(
            <Text className='grow basis-0 text-end text-sm font-semibold sm:text-center'>
              {data.year}
            </Text>,
            [data.year]
          )}
        </div>
      </TableProjectCardMagneticContainer>
    </Link>
  );
};

export default forwardRef(TableProjectCardOrganism);
export type { TableProjectCardOrganismProps };
