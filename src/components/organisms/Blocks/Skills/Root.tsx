import { forwardRef } from 'react';

import SkillCard, { SkillCardProps } from '@/components/organisms/Cards/Skill';
import { cn } from '@/utils';

import SecondaryLayoutBlock, {
  SecondaryLayoutBlockProps
} from '../Layout/Secondary';

type SkillsBlockOrganismOwnProps = {
  data: SecondaryLayoutBlockProps['data'] & {
    items: SkillCardProps['data'][];
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
      <div className='grid w-9/10 max-w-screen-xl sm:grid-cols-12'>
        <ul className='m-0 flex flex-wrap justify-end gap-xs p-0 sm:col-span-8 sm:!col-end-13 lg:col-span-7'>
          {data.items.map((data) => (
            <SkillCard
              data={data}
              key={data.id}
            />
          ))}
        </ul>
      </div>
    </SecondaryLayoutBlock>
  );
};

export default forwardRef(SkillsBlockOrganism);
export type { SkillsBlockOrganismProps };
