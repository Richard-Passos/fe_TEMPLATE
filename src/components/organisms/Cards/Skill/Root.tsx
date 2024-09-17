import { ComponentPropsWithRef, forwardRef } from 'react';

import { Icon, Title } from '@/components/atoms';
import { IconProps } from '@/components/atoms/Icon';
import { TitleProps } from '@/components/atoms/Title';
import Card from '@/components/molecules/Card';
import { Skill } from '@/types';
import { cn } from '@/utils';

import SkillCardHover from './Hover';

const DELAY = 500;

type SkillCardOrganismOwnProps = {
  data: Skill;
  iconProps?: Partial<IconProps>;
  titleProps?: Partial<TitleProps>;
};

type SkillCardOrganismProps = SkillCardOrganismOwnProps &
  Omit<ComponentPropsWithRef<'div'>, keyof SkillCardOrganismOwnProps>;

const SkillCardOrganism = (
  { className, data, iconProps, titleProps, ...props }: SkillCardOrganismProps,
  ref: SkillCardOrganismProps['ref']
) => {
  return (
    <SkillCardHover delay={DELAY}>
      <div
        className={cn('group/card aspect-square perspective-1000', className)}
        ref={ref}
        {...props}
      >
        <div className='relative size-full transition-transform duration-500 ease-backOut transform-style-3d group-data-[active=true]/card:rotate-y-180'>
          <Card.Root className='absolute items-center justify-center backface-hidden'>
            <div className='flex size-1/2 items-center justify-center rounded bg-gray-1 dark:bg-dark-6'>
              <Icon
                className='size-1/2'
                src={data.icon}
              />
            </div>
          </Card.Root>

          <Card.Root className='absolute items-center justify-center rotate-y-180 backface-hidden'>
            <Title
              className='w-full break-words text-center'
              component='h4'
              order={6}
            >
              {data.title}
            </Title>
          </Card.Root>
        </div>
      </div>
    </SkillCardHover>
  );
};

export default forwardRef(SkillCardOrganism);
export type { SkillCardOrganismProps };
