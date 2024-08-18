import { ComponentType, forwardRef } from 'react';

import { BentoGrid } from '@/components/molecules';
import { BentoGridRootProps } from '@/components/molecules/BentoGrid';
import Cards from '@/components/organisms/Cards';
import { TypeVariants } from '@/types';

import PrimaryLayoutBlock, { PrimaryLayoutBlockProps } from '../Layout/Primary';

type BentoGridBlockOrganismOwnProps = {
  data: PrimaryLayoutBlockProps['data'] & {
    templates: BentoGridRootProps['templates'];
    items: TypeVariants<Omit<typeof Cards, 'Project'>>[];
  };
  withAnimation?: boolean;
};

type BentoGridBlockOrganismProps = BentoGridBlockOrganismOwnProps &
  Omit<PrimaryLayoutBlockProps, keyof BentoGridBlockOrganismOwnProps | 'data'>;

const BentoGridBlockOrganism = (
  { data, withAnimation, ...props }: BentoGridBlockOrganismProps,
  ref: BentoGridBlockOrganismProps['ref']
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
      <BentoGrid.Root
        className='mt-xl max-w-screen-lg pt-md'
        templates={data.templates}
      >
        {data.items.map(({ type, data }, i) => {
          const Card = Cards[type] as ComponentType<any>;

          return (
            <BentoGrid.Item
              index={i}
              key={i}
            >
              <Card data={data} />
            </BentoGrid.Item>
          );
        })}
      </BentoGrid.Root>
    </PrimaryLayoutBlock>
  );
};

export default forwardRef(BentoGridBlockOrganism);
export type { BentoGridBlockOrganismProps };
