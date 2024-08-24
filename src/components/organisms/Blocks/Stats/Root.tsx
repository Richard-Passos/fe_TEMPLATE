import { ComponentPropsWithRef, ReactNode, forwardRef } from 'react';

import { ScrollAnimate, Title } from '@/components/atoms';
import { ScrollAnimateConfigOptions } from '@/components/atoms/ScrollAnimate';
import { TitleProps } from '@/components/atoms/Title';
import { ActionProps } from '@/components/molecules/Action';
import { StatsCard } from '@/components/organisms/Cards';
import { StatsCardProps } from '@/components/organisms/Cards/Stats';
import { cn, renderComp } from '@/utils';

import PrimaryLayoutBlock, { PrimaryLayoutBlockProps } from '../Layout/Primary';

const SCROLL_OFFSET = ['0 1', '0 .55'],
  ANIMATION_CONFIG = {
    opacity: {
      scrollConfig: {
        offset: SCROLL_OFFSET
      },
      prop: 'opacity',
      propPoints: [0, 1]
    } as ScrollAnimateConfigOptions,
    x: {
      scrollConfig: {
        offset: SCROLL_OFFSET
      },
      prop: '--x',
      propPoints: ['-25%', '0%']
    } as ScrollAnimateConfigOptions,
    rotate: {
      scrollConfig: {
        offset: SCROLL_OFFSET
      },
      prop: '--rotate',
      propPoints: ['-12deg', '0deg']
    } as ScrollAnimateConfigOptions
  };

type StatsBlockOrganismOwnProps = {
  data: PrimaryLayoutBlockProps['data'] & {
    subtitle?: ReactNode;
    items: StatsCardProps['data'][];
  };
  wrapperProps?: Partial<ComponentPropsWithRef<'section'>>;
  subtitleProps?: Partial<TitleProps>;
  imageProps?: Partial<any>;
  listProps?: Partial<any>;
  actionProps?: Partial<ActionProps>;
};

type StatsBlockOrganismProps = StatsBlockOrganismOwnProps &
  Omit<PrimaryLayoutBlockProps, keyof StatsBlockOrganismOwnProps>;

const StatsBlockOrganism = (
  {
    data,
    wrapperProps,
    subtitleProps,
    imageProps,
    listProps,
    actionProps,
    ...props
  }: StatsBlockOrganismProps,
  ref: StatsBlockOrganismProps['ref']
) => {
  return (
    <PrimaryLayoutBlock
      data={{
        title: data.title,
        description: data.description
      }}
      ref={ref}
      {...props}
    >
      <section
        {...wrapperProps}
        className={cn(
          'flex w-9/10 max-w-screen-lg flex-col items-center',
          wrapperProps?.className
        )}
      >
        {renderComp(
          <Title
            order={3}
            {...subtitleProps}
            className={cn(
              'mb-md mr-auto text-sm text-dimmed',
              subtitleProps?.className
            )}
          >
            {data.subtitle}
          </Title>,
          [data.subtitle]
        )}

        <ul className='m-0 grid w-full list-none gap-sm p-0 md:grid-cols-2'>
          {data.items.map((data) => (
            <ScrollAnimate
              config={ANIMATION_CONFIG.opacity}
              key={data.id}
            >
              <ScrollAnimate config={ANIMATION_CONFIG.x}>
                <ScrollAnimate config={ANIMATION_CONFIG.rotate}>
                  <li className='h-fit translate-x-[--x] rotate-[--rotate] even:-translate-x-[--x] even:-rotate-[--rotate] md:even:mt-2xl md:[&:not(:last-child)]:even:-mb-2xl'>
                    <StatsCard data={data} />
                  </li>
                </ScrollAnimate>
              </ScrollAnimate>
            </ScrollAnimate>
          ))}
        </ul>
      </section>
    </PrimaryLayoutBlock>
  );
};

export default forwardRef(StatsBlockOrganism);
export type { StatsBlockOrganismProps };
