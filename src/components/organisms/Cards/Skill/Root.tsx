import { ComponentPropsWithRef, forwardRef } from 'react';

import { Icon, Title } from '@/components/atoms';
import { IconProps } from '@/components/atoms/Icon';
import { TitleProps } from '@/components/atoms/Title';
import Card from '@/components/molecules/Card';
import { cn } from '@/utils';

type SkillCardOrganismOwnProps = {
  data: {
    id: string;
    title: TitleProps['children'];
    icon: IconProps['src'];
  };
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
    <div
      className={cn(
        'group/card aspect-square w-full max-w-40 perspective-1000',
        className
      )}
      ref={ref}
      {...props}
    >
      <div className='relative size-full transition-transform duration-500 ease-backOut transform-style-3d group-hover/card:rotate-y-180'>
        <Card.Root className='absolute items-center justify-center backface-hidden'>
          <div className='flex size-1/2 items-center justify-center rounded bg-gray-1 dark:bg-dark-5'>
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
  );
};

export default forwardRef(SkillCardOrganism);
export type { SkillCardOrganismProps };
