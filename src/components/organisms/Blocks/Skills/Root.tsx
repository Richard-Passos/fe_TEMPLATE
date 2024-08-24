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
  { className, data, headerProps, ...props }: SkillsBlockOrganismProps,
  ref: SkillsBlockOrganismProps['ref']
) => {
  return (
    <SecondaryLayoutBlock
      className={cn(
        'grid min-h-fit w-9/10 max-w-screen-xl sm:grid-cols-12 2xl:min-h-fit',
        className
      )}
      data={{
        title: data.title
      }}
      headerProps={{
        ...headerProps,
        className: cn('sm:col-span-full', headerProps?.className)
      }}
      ref={ref}
      {...props}
    >
      <ul className='m-0 grid grid-cols-3 gap-xs p-0 [direction:rtl] sm:col-span-8 sm:!col-end-13 sm:grid-cols-3 md:grid-cols-4 lg:col-span-7'>
        {data.items.map((data) => (
          <SkillCard
            data={data}
            key={data.id}
          />
        ))}
      </ul>
    </SecondaryLayoutBlock>
  );
};

export default forwardRef(SkillsBlockOrganism);
export type { SkillsBlockOrganismProps };
