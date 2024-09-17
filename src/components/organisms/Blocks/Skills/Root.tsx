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
      <div className='w-9/10 max-w-screen-xl'>
        <ul className='m-0 flex max-w-screen-md list-none flex-wrap justify-end gap-xs p-0 sm:ml-auto'>
          {data.items.map((data) => (
            <li
              className='w-full max-w-40'
              key={data.slug}
            >
              <SkillCard
                className='w-full'
                data={data}
              />
            </li>
          ))}
        </ul>
      </div>
    </SecondaryLayoutBlock>
  );
};

export default forwardRef(SkillsBlockOrganism);
export type { SkillsBlockOrganismProps };
