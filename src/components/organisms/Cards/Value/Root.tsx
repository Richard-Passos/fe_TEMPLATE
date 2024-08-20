import { forwardRef } from 'react';

import { Icon, Text, Title } from '@/components/atoms';
import { IconProps } from '@/components/atoms/Icon';
import { TextProps } from '@/components/atoms/Text';
import { TitleProps } from '@/components/atoms/Title';
import Card, { CardRootProps } from '@/components/molecules/Card';
import { cn } from '@/utils';

type ValueCardOrganismOwnProps = {
  data: {
    id: string;
    icon: IconProps['src'];
    title: TitleProps['children'];
    description: TextProps['children'];
  };
  iconProps?: Partial<IconProps>;
  titleProps?: Partial<TitleProps>;
  descriptionProps?: Partial<TextProps>;
};

type ValueCardOrganismProps = ValueCardOrganismOwnProps &
  Omit<CardRootProps, keyof ValueCardOrganismOwnProps>;

const ValueCardOrganism = (
  {
    className,
    data,
    iconProps,
    titleProps,
    descriptionProps,
    ...props
  }: ValueCardOrganismProps,
  ref: ValueCardOrganismProps['ref']
) => {
  return (
    <Card.Root
      className={cn('min-h-52 flex-col justify-between', className)}
      ref={ref}
      {...props}
    >
      <div className='flex size-12 items-center justify-center rounded-sm bg-gray-0 dark:bg-dark-7'>
        <Icon
          src={data.icon}
          {...iconProps}
          className={cn('size-1/2', iconProps?.className)}
        />
      </div>

      <Title
        order={5}
        {...titleProps}
        className={cn('mt-lg', titleProps?.className)}
      >
        {data.title}
      </Title>

      <Text
        {...descriptionProps}
        className={cn(
          'leading-relaxed text-dimmed',
          descriptionProps?.className
        )}
      >
        {data.description}
      </Text>
    </Card.Root>
  );
};

export default forwardRef(ValueCardOrganism);
export type { ValueCardOrganismProps };
