import { Fragment, forwardRef } from 'react';

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
        'group relative grid aspect-square w-full grid-cols-4 items-end overflow-hidden rounded-3xl p-sm font-normal text-current no-underline transition-transform duration-300 group-hover:scale-95 md:even:mt-xl md:[&:not(:last-child)]:even:-mb-xl',
        className
      )}
      ref={ref}
      {...props}
    >
      <Text className='absolute left-sm top-sm z-10 text-sm font-normal transition-[transform,clip-path] duration-300 -translate-y-full [clip-path:inset(100%_0_0_0)] group-hover:translate-y-0 group-hover:[clip-path:inset(0)]'>
        {`${data.index + 1}`.padStart(2, '0')}/
      </Text>

      <div className='bg-muted absolute inset-0 overflow-hidden rounded-inherit border border-transparent'>
        <ScrollAnimate
          config={{
            scrollConfig: {
              offset: ['0 1', '0 .35']
            },
            prop: 'clipPath',
            propPoints: [
              'inset(50% 0 0 0 round 50% 50% 0 0)',
              'inset(0% 0 0 0 round 0% 0% 0 0)'
            ]
          }}
        >
          <ScrollAnimate
            config={{
              scrollConfig: {
                offset: ['0 1', '0 .35']
              },
              prop: 'scale',
              propPoints: [1.1, 1]
            }}
          >
            <div className='size-full'>
              <Image
                alt={data.image.alt}
                className='size-full object-cover transition-transform duration-300 group-hover:scale-110'
                height={288}
                src={data.image.src}
                width={288}
              />
            </div>
          </ScrollAnimate>
        </ScrollAnimate>
      </div>

      <Title className='absolute left-1/2 top-1/2 z-10 w-9/10 text-center text-[10vw] font-bold tracking-tight -translate-x-1/2 -translate-y-1/2 sm:text-[min(6vw,3rem)]'>
        {data.title}
      </Title>

      <ul className='relative z-10 col-span-3 flex flex-wrap gap-1.5 text-sm font-normal lowercase transition-[transform,clip-path] duration-300 translate-y-full [clip-path:inset(0_0_100%_0)] group-hover:translate-y-0 group-hover:[clip-path:inset(0)]'>
        {data.roles
          .toSorted((a, b) => a.localeCompare(b))
          .map((role, i, arr) => (
            <Fragment key={role}>
              <li className='line-clamp-1 break-all'>{role}</li>

              {i < arr.length - 1 && <li>&</li>}
            </Fragment>
          ))}
      </ul>

      {renderComp(
        <Text className='relative z-10 justify-self-end text-sm font-normal transition-[transform,clip-path] duration-300 translate-y-full [clip-path:inset(0_0_100%_0)] group-hover:translate-y-0 group-hover:[clip-path:inset(0)]'>
          {data.year}
        </Text>,
        [data.year]
      )}

      <span className='bg-main/60 absolute inset-0 rounded-inherit opacity-0 transition-[transform,opacity] duration-300 group-hover:opacity-100' />
    </Link>
  );
};

export default forwardRef(GridProjectCardOrganism);
export type { GridProjectCardOrganismProps };
