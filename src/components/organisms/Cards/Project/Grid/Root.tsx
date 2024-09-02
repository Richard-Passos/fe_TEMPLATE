import { forwardRef } from 'react';

import { imageYScrollAnim } from '@/animations/scroll';
import { Image, Link, ScrollAnimate, Text, Title } from '@/components/atoms';
import { LinkProps } from '@/components/atoms/Link';
import { cn, renderComp } from '@/utils';

type GridProjectCardOrganismOwnProps = {
  data: {
    index: number;
    title: string;
    image: {
      src: string;
      alt: string;
    };
    roles: string[];
    year?: number;
  };
};

type GridProjectCardOrganismProps = GridProjectCardOrganismOwnProps &
  Omit<LinkProps, keyof GridProjectCardOrganismOwnProps>;

const GridProjectCardOrganism = (
  { className, data, ...props }: GridProjectCardOrganismProps,
  ref: GridProjectCardOrganismProps['ref']
) => {
  return (
    <Link
      className={cn(
        'group/item block aspect-[1/1.1] w-full text-current',
        className
      )}
      ref={ref}
      underline='never'
      {...props}
    >
      <div className='relative flex size-full flex-col'>
        <div className='grid grid-rows-[0fr] transition-[grid-template-rows] duration-300 group-hover/item:grid-rows-[1fr]'>
          <div className='overflow-hidden transition-transform duration-300 translate-y-2 group-hover/item:translate-y-0'>
            <div className='px-md pb-1'>
              <Title
                component='h4'
                order={6}
              >
                {data.title}
              </Title>
            </div>
          </div>
        </div>

        <div className='relative grow overflow-hidden rounded-xl bg-gray-1 dark:bg-dark-5'>
          <ScrollAnimate config={imageYScrollAnim}>
            <div className='absolute h-[115%] w-full'>
              <Image
                alt={data.image.alt}
                className='object-cover'
                fill
                src={data.image.src}
              />
            </div>
          </ScrollAnimate>
        </div>

        <div className='grid origin-bottom grid-rows-[0fr] transition-[grid-template-rows] duration-300 group-hover/item:grid-rows-[1fr]'>
          <div className='overflow-hidden transition-transform duration-300 translate-y-2 group-hover/item:translate-y-0'>
            <div className='flex gap-lg px-md pt-1'>
              <Text className='col-span-3 text-sm font-medium'>
                {data.roles.join(' & ')}
              </Text>

              {renderComp(
                <Text className='justify-self-end text-end text-sm font-medium'>
                  {data.year}
                </Text>,
                [data.year]
              )}
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default forwardRef(GridProjectCardOrganism);
export type { GridProjectCardOrganismProps };
