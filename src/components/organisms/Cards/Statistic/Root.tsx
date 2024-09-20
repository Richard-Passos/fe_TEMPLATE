import { forwardRef } from 'react';

import { Title } from '@/components/atoms';
import { TitleProps } from '@/components/atoms/Title';
import Card, { CardRootProps } from '@/components/molecules/Card';
import { Statistic } from '@/types';
import { cn } from '@/utils';

type StatisticCardOrganismOwnProps = {
  data: Statistic;
  valueProps?: Partial<TitleProps>;
  titleProps?: Partial<TitleProps>;
};

type StatisticCardOrganismProps = StatisticCardOrganismOwnProps &
  Omit<CardRootProps, keyof StatisticCardOrganismOwnProps>;

const StatisticCardOrganism = (
  {
    className,
    data,
    valueProps,
    titleProps,
    ...props
  }: StatisticCardOrganismProps,
  ref: StatisticCardOrganismProps['ref']
) => {
  return (
    <Card.Root
      className={cn(
        'min-h-52 justify-between gap-sm px-[7.5%] py-xl',
        className
      )}
      ref={ref}
      {...props}
    >
      <Title
        component='p'
        order={1}
        {...valueProps}
        className={cn('font-semibold leading-none', valueProps?.className)}
      >
        {data.value}
      </Title>

      <Title
        component='h4'
        order={5}
        {...titleProps}
        className={cn(
          `ml-auto whitespace-pre-line text-end font-semibold leading-none text-dimmed`,
          titleProps?.className
        )}
      >
        {data.title}
      </Title>
    </Card.Root>
  );
};

export default forwardRef(StatisticCardOrganism);
export type { StatisticCardOrganismProps };
