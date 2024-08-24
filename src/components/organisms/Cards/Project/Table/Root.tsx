import { forwardRef } from 'react';

import { Image, Link, Magnetic, Text, Title } from '@/components/atoms';
import { LinkProps } from '@/components/atoms/Link';
import { CardRoot } from '@/components/molecules/Card';
import { cn, renderComp } from '@/utils';

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
        'group/item relative font-normal text-current no-underline hover:z-10 focus-visible:outline-0 *:focus-visible:outline',
        className
      )}
      ref={ref}
      {...props}
    >
      <Magnetic.Container>
        <CardRoot className='relative flex-row items-center justify-center gap-xs overflow-visible px-[7.5%] py-xl transition-[transform,opacity] group-hover:[*:not(:hover)>&]:scale-x-95 group-hover:[*:not(:hover)>&]:opacity-50'>
          <Text className='relative z-10 mb-auto inline-flex translate-y-0.5 text-sm font-semibold text-dimmed'>
            {`${data.index + 1}`.padStart(2, '0')}/
          </Text>

          <div className='relative z-10 flex w-full flex-wrap items-start gap-x-sm gap-y-4 sm:items-center'>
            <Title
              className='basis-full sm:basis-1/2'
              order={4}
            >
              {data.title}
            </Title>

            <Text className='grow basis-2/3 overflow-hidden text-ellipsis text-sm font-medium lowercase sm:basis-0 sm:text-end'>
              {data.roles.toSorted((a, b) => a.localeCompare(b)).join(' & ')}
            </Text>

            {renderComp(
              <Text className='grow basis-0 text-end text-sm font-semibold sm:text-end'>
                {data.year}
              </Text>,
              [data.year]
            )}
          </div>

          <Magnetic.Root
            limit={{ x: 0.2, y: 0.35 }}
            smoothConfig={{
              damping: 15,
              stiffness: 150
            }}
          >
            <div className='pointer-events-none absolute'>
              <div className='size-72 scale-90 overflow-hidden rounded-lg bg-gray-1 opacity-0 transition-[transform,opacity] group-hover/item:scale-100 group-hover/item:opacity-100 dark:bg-dark-5'>
                <Image
                  alt={data.image.alt}
                  className='object-cover'
                  height={288}
                  src={data.image.src}
                  width={288}
                />
              </div>
            </div>
          </Magnetic.Root>
        </CardRoot>
      </Magnetic.Container>
    </Link>
  );
};

export default forwardRef(TableProjectCardOrganism);
export type { TableProjectCardOrganismProps };
