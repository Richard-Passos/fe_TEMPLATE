import { ComponentPropsWithRef, ComponentType, forwardRef } from 'react';

import { Title } from '@/components/atoms';
import { TitleProps } from '@/components/atoms/Title';
import { BentoGrid } from '@/components/molecules';
import { BentoGridRootProps } from '@/components/molecules/BentoGrid';
import Cards from '@/components/organisms/Cards';
import { TypeVariants } from '@/types';
import { cn, renderComp } from '@/utils';

import SecondaryLayoutBlock, {
  SecondaryLayoutBlockProps
} from '../Layout/Secondary';

type SecondaryBentoGridBlockOrganismOwnProps = {
  data: SecondaryLayoutBlockProps['data'] & {
    subtitle?: TitleProps['children'];
    templates: BentoGridRootProps['templates'];
    items: TypeVariants<Omit<typeof Cards, 'Project'>>[];
  };
  hasAnimation?: boolean;
  wrapperProps?: Partial<ComponentPropsWithRef<'div'>>;
  subtitleProps?: Partial<TitleProps>;
  gridProps?: Partial<BentoGridRootProps>;
};

type SecondaryBentoGridBlockOrganismProps =
  SecondaryBentoGridBlockOrganismOwnProps &
    Omit<
      SecondaryLayoutBlockProps,
      keyof SecondaryBentoGridBlockOrganismOwnProps | 'data'
    >;

const SecondaryBentoGridBlockOrganism = (
  {
    className,
    data,
    hasAnimation,
    wrapperProps,
    subtitleProps,
    gridProps,
    ...props
  }: SecondaryBentoGridBlockOrganismProps,
  ref: SecondaryBentoGridBlockOrganismProps['ref']
) => {
  return (
    <SecondaryLayoutBlock
      data={{
        title: data.title
      }}
      className={cn('min-h-fit 2xl:min-h-fit', className)}
      ref={ref}
      {...props}
    >
      <div
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

        <BentoGrid.Root
          templates={data.templates}
          {...gridProps}
        >
          {data.items.map(({ type, ...props }, i) => {
            const Card = Cards[type] as ComponentType<any>;

            const Item = (
              <BentoGrid.Item
                index={i}
                {...(!hasAnimation && { key: i })}
              >
                <Card {...props} />
              </BentoGrid.Item>
            );

            if (hasAnimation)
              return (
                <BentoGrid.ScrollAnimate key={i}>
                  {Item}
                </BentoGrid.ScrollAnimate>
              );

            return Item;
          })}
        </BentoGrid.Root>
      </div>
    </SecondaryLayoutBlock>
  );
};

export default forwardRef(SecondaryBentoGridBlockOrganism);
export type { SecondaryBentoGridBlockOrganismProps };
