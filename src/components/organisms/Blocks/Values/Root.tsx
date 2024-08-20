import { ComponentPropsWithRef, forwardRef } from 'react';

import { BentoGrid } from '@/components/molecules';
import { BentoGridRootProps } from '@/components/molecules/BentoGrid';
import ValueCard, { ValueCardProps } from '@/components/organisms/Cards/Value';
import { cn } from '@/utils';

import Icons, { IconsProps } from '../../Icons';
import SecondaryLayoutBlock, {
  SecondaryLayoutBlockProps
} from '../Layout/Secondary';

type ValuesBlockOrganismOwnProps = {
  data: SecondaryLayoutBlockProps['data'] & {
    templates: BentoGridRootProps['templates'];
    items: ValueCardProps['data'][];
    icons: {
      left: IconsProps['left'];
      right: IconsProps['right'];
    };
  };
  wrapperProps?: Partial<ComponentPropsWithRef<'div'>>;
  gridProps?: Partial<BentoGridRootProps>;
  iconsProps?: Partial<IconsProps>;
};

type ValuesBlockOrganismProps = ValuesBlockOrganismOwnProps &
  Omit<SecondaryLayoutBlockProps, keyof ValuesBlockOrganismOwnProps>;

const ValuesBlockOrganism = (
  {
    data,
    wrapperProps,
    gridProps,
    iconsProps,
    ...props
  }: ValuesBlockOrganismProps,
  ref: ValuesBlockOrganismProps['ref']
) => {
  return (
    <SecondaryLayoutBlock
      data={{
        title: data.title,
        subtitle: data.subtitle
      }}
      ref={ref}
      {...props}
    >
      <div
        {...wrapperProps}
        className={cn(
          'relative flex w-full flex-col items-center',
          wrapperProps?.className
        )}
      >
        <BentoGrid.Root
          templates={data.templates}
          {...gridProps}
          className={cn(
            'relative z-10 w-9/10 max-w-screen-xl gap-xs',
            gridProps?.className
          )}
        >
          {data.items.map((data, i) => (
            <BentoGrid.Item
              index={i}
              key={data.id}
            >
              <ValueCard data={data} />
            </BentoGrid.Item>
          ))}
        </BentoGrid.Root>

        <Icons
          left={data.icons.left}
          right={data.icons.right}
          {...iconsProps}
        />
      </div>
    </SecondaryLayoutBlock>
  );
};

export default forwardRef(ValuesBlockOrganism);
export type { ValuesBlockOrganismProps };
