import { forwardRef } from 'react';

import { HorizontalScroll } from '@/components/atoms';
import SkillCard, { SkillCardProps } from '@/components/organisms/Cards/Skill';
import { cn } from '@/utils';

import SecondaryLayoutBlock, {
  SecondaryLayoutBlockProps
} from '../Layout/Secondary';

type SkillsBlockOrganismOwnProps = {
  data: SecondaryLayoutBlockProps['data'] & {
    items: SkillCardProps['data'][][];
  };
};

type SkillsBlockOrganismProps = SkillsBlockOrganismOwnProps &
  Omit<SecondaryLayoutBlockProps, keyof SkillsBlockOrganismOwnProps>;

const SkillsBlockOrganism = (
  { className, data, ...props }: SkillsBlockOrganismProps,
  ref: SkillsBlockOrganismProps['ref']
) => {
  return (
    <SecondaryLayoutBlock
      className={cn('min-h-fit 2xl:min-h-fit', className)}
      data={{
        title: data.title
      }}
      ref={ref}
      {...props}
    >
      <div className='flex w-full flex-col gap-[--gap] [--gap:theme(spacing.xs)]'>
        {data.items.map((items, i) => (
          <HorizontalScroll
            baseVelocity={i % 2 === 0 ? 1 : -1}
            key={i}
          >
            {items.map((data) => (
              <SkillCard
                data={data}
                key={data.id}
              />
            ))}
          </HorizontalScroll>
        ))}
      </div>
    </SecondaryLayoutBlock>
  );
};

export default forwardRef(SkillsBlockOrganism);
export type { SkillsBlockOrganismProps };
