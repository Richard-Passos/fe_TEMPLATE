import { ComponentPropsWithRef, ReactNode, forwardRef } from 'react';

import { Title } from '@/components/atoms';
import { TitleProps } from '@/components/atoms/Title';
import { Action } from '@/components/molecules';
import { ActionProps } from '@/components/molecules/Action';
import { ServiceCard } from '@/components/organisms/Cards';
import { ServiceCardProps } from '@/components/organisms/Cards/Service';
import { cn, renderComp } from '@/utils';

import PrimaryLayoutBlock, { PrimaryLayoutBlockProps } from '../Layout/Primary';
import ServicesBlockImage from './Image';
import { ServicesBlockImageOrganismProps } from './Image/Root';

type ServicesBlockOrganismOwnProps = {
  data: PrimaryLayoutBlockProps['data'] &
    ServicesBlockImageOrganismProps['data'] & {
      subtitle?: ReactNode;
      items: ServiceCardProps['data'][];
      action: {
        label?: ReactNode;
      };
    };
  wrapperProps?: Partial<ComponentPropsWithRef<'section'>>;
  subtitleProps?: Partial<TitleProps>;
  imageProps?: Partial<ServicesBlockImageOrganismProps>;
  listProps?: Partial<ComponentPropsWithRef<'ul'>>;
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
              'mb-md mr-auto uppercase text-dimmed',
              subtitleProps?.className
            )}
          >
            {data.subtitle}
          </Title>,
          [data.subtitle]
        )}

        <div className='flex w-full items-start justify-end gap-md md:gap-xl'>
          <ServicesBlockImage
            data={{
              image: data.image
            }}
            {...imageProps}
            className={cn('grow basis-72 max-md:hidden', imageProps?.className)}
          />

          <ul
            {...listProps}
            className={cn(
              'm-0 flex max-w-lg grow basis-[theme(maxWidth.sm)] list-none flex-col gap-xs p-0 sm:py-xl',
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

        {renderComp(
          <Action
            as='link'
            href='/contact'
            size='md'
            variant='default'
            {...actionProps}
            className={cn('mt-xl', actionProps?.className)}
          >
            {data.action.label}
          </Action>,
          [data.action.label]
        )}
      </section>
    </PrimaryLayoutBlock>
  );
};

export default forwardRef(ServicesBlockOrganism);
export type { ServicesBlockOrganismProps };
