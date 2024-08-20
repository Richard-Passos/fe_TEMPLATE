import { ComponentPropsWithRef, ReactNode, forwardRef } from 'react';

import { Image, ScrollAnimate, Title } from '@/components/atoms';
import { ImageProps } from '@/components/atoms/Image';
import { ScrollAnimateConfigOptions } from '@/components/atoms/ScrollAnimate';
import { TitleProps } from '@/components/atoms/Title';
import { Action } from '@/components/molecules';
import { ActionProps } from '@/components/molecules/Action';
import { ServiceCard } from '@/components/organisms/Cards';
import { ServiceCardProps } from '@/components/organisms/Cards/Service';
import { cn, renderComp } from '@/utils';

import PrimaryLayoutBlock, { PrimaryLayoutBlockProps } from '../Layout/Primary';

const ANIMATION_CONFIG = {
  prop: 'y',
  propPoints: ['-13%', '0%']
} as ScrollAnimateConfigOptions;

type ServicesBlockOrganismOwnProps = {
  data: PrimaryLayoutBlockProps['data'] & {
    subtitle?: ReactNode;
    image: Pick<ImageProps, 'src' | 'alt'>;
    items: ServiceCardProps['data'][];
    action: {
      label: ReactNode;
    };
  };
  wrapperProps?: Partial<ComponentPropsWithRef<'section'>>;
  subtitleProps?: Partial<TitleProps>;
  imageProps?: Partial<any>;
  listProps?: Partial<any>;
  actionProps?: Partial<ActionProps>;
};

type ServicesBlockOrganismProps = ServicesBlockOrganismOwnProps &
  Omit<PrimaryLayoutBlockProps, keyof ServicesBlockOrganismOwnProps>;

const ServicesBlockOrganism = (
  {
    data,
    wrapperProps,
    subtitleProps,
    imageProps,
    listProps,
    actionProps,
    ...props
  }: ServicesBlockOrganismProps,
  ref: ServicesBlockOrganismProps['ref']
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
            component='h3'
            order={6}
            {...subtitleProps}
            className={cn(
              'mb-md mr-auto text-dimmed',
              subtitleProps?.className
            )}
          >
            {data.subtitle}
          </Title>,
          [data.subtitle]
        )}

        <div className='grid gap-xl sm:grid-cols-2'>
          <div className='relative size-full'>
            <div className='rounded-[--radius] border p-[--p] [--p:theme(spacing.xs)] [--radius:theme(borderRadius.xl)]'>
              <div className='sticky top-2xl aspect-[1/1.15] w-full overflow-hidden rounded-[calc(var(--radius)-var(--p))] bg-gray-1 dark:bg-dark-7 max-sm:hidden'>
                <ScrollAnimate config={ANIMATION_CONFIG}>
                  <Image
                    alt={data.image.alt}
                    height={605}
                    src={data.image.src}
                    width={465}
                    {...imageProps}
                    className={cn('object-cover', imageProps?.className)}
                  />
                </ScrollAnimate>
              </div>
            </div>
          </div>

          <ul
            {...listProps}
            className={cn(
              'm-0 flex list-none flex-col gap-xs p-0 sm:py-xl',
              listProps?.className
            )}
          >
            {data.items.map((data) => (
              <li key={data.id}>
                <ServiceCard data={data} />
              </li>
            ))}
          </ul>
        </div>

        <Action
          href='/contact'
          size='md'
          variant='default'
          {...actionProps}
          className={cn('mt-xl', actionProps?.className)}
        >
          {data.action.label}
        </Action>
      </section>
    </PrimaryLayoutBlock>
  );
};

export default forwardRef(ServicesBlockOrganism);
export type { ServicesBlockOrganismProps };
