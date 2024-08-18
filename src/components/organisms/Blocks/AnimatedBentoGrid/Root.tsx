import { ComponentType, forwardRef } from 'react';

import { BentoGrid } from '@/components/molecules';
import { BentoGridRootProps } from '@/components/molecules/BentoGrid';
import Cards from '@/components/organisms/Cards';
import { TypeVariants } from '@/types';

import PrimaryLayoutBlock, { PrimaryLayoutBlockProps } from '../Layout/Primary';

type AnimatedBentoGridBlockOrganismOwnProps = {
  data: PrimaryLayoutBlockProps['data'] & {
    templates: BentoGridRootProps['templates'];
    items: TypeVariants<Omit<typeof Cards, 'Project'>>[];
  };
  withAnimation?: boolean;
};

type AnimatedBentoGridBlockOrganismProps =
  AnimatedBentoGridBlockOrganismOwnProps &
    Omit<
      PrimaryLayoutBlockProps,
      keyof AnimatedBentoGridBlockOrganismOwnProps | 'data'
    >;

const AnimatedBentoGridBlockOrganism = (
  { data, withAnimation, ...props }: AnimatedBentoGridBlockOrganismProps,
  ref: AnimatedBentoGridBlockOrganismProps['ref']
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
        className='mt-xl w-9/10 max-w-screen-lg pt-md'
        templates={data.templates}
      >
        {data.items.map(({ type, data }, i) => {
          const Card = Cards[type] as ComponentType<any>;

          return (
            <BentoGrid.ScrollAnimate key={i}>
              <BentoGrid.Item index={i}>
                <Card data={data} />
              </BentoGrid.Item>
            </BentoGrid.ScrollAnimate>
          );
        })}
      </BentoGrid.Root>
    </PrimaryLayoutBlock>
  );
};

export default forwardRef(AnimatedBentoGridBlockOrganism);
export type { AnimatedBentoGridBlockOrganismProps };
