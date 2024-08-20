import { forwardRef } from 'react';

import { Icon, Magnetic, Text, Title } from '@/components/atoms';
import { IconProps } from '@/components/atoms/Icon';
import { PlusIcon } from '@/components/atoms/Icon/icons';
import { MagneticRootProps } from '@/components/atoms/Magnetic';
import { TextProps } from '@/components/atoms/Text';
import { TitleProps } from '@/components/atoms/Title';
import Card, { CardRootProps } from '@/components/molecules/Card';
import { cn } from '@/utils';

type SkillCardOrganismOwnProps = {
  data: {
    id: string;
    title: TitleProps['children'];
    description: TextProps['children'];
    icon: IconProps['src'];
  };
  idProps?: Partial<TitleProps>;
  iconProps?: Partial<IconProps>;
  descriptionProps?: Partial<TextProps>;
  titleProps?: Partial<TitleProps>;
  watermarkProps?: Partial<IconProps>;
};

type SkillCardOrganismProps = SkillCardOrganismOwnProps &
  Omit<CardRootProps, keyof SkillCardOrganismOwnProps>;

const SkillCardOrganism = (
  {
    className,
    data,
    idProps,
    iconProps,
    descriptionProps,
    titleProps,
    watermarkProps,
    ...props
  }: SkillCardOrganismProps,
  ref: SkillCardOrganismProps['ref']
) => {
  return (
    <Magnetic.Container>
      <Card.Root
        className={cn('w-[90vw] max-w-72', className)}
        data-state='open'
        ref={ref}
        {...props}
      >
        <div className='flex gap-sm'>
          <div className='flex size-12 items-center justify-center rounded border'>
            <Icon
              className='size-1/2'
              src={data.icon}
            />
          </div>

          <section>
            <Title
              className='leading-tight'
              component='h4'
              order={6}
            >
              {data.title}
            </Title>

            <Text className='text-xs text-dimmed'>{data.title}</Text>
          </section>
        </div>
      </Card.Root>
    </Magnetic.Container>
  );
};

export default forwardRef(SkillCardOrganism);
export type { SkillCardOrganismProps };
