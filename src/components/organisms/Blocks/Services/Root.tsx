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
        label: ReactNode;
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
              'mb-md mr-auto text-dimmed',
              subtitleProps?.className
            )}
          >
            {data.subtitle}
          </Title>,
          [data.subtitle]
        )}

        <div className='grid gap-md sm:grid-cols-12 md:gap-xl'>
          <ServicesBlockImage
            data={{
              image: data.image
            }}
            {...imageProps}
            className={cn(
              'max-sm:hidden sm:col-span-5 md:col-span-6',
              imageProps?.className
            )}
          />

          <ul
            {...listProps}
            className={cn(
              'm-0 flex list-none flex-col gap-xs p-0 sm:col-span-7 sm:py-xl md:col-span-6',
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
