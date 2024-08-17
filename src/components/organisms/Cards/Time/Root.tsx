import { ReactNode, forwardRef } from 'react';

import { Text, Title } from '@/components/atoms';
import { Card } from '@/components/molecules';
import { CardRootProps } from '@/components/molecules/Card';
import { cn } from '@/utils';

type TimeCardOrganismOwnProps = {
  data: {
    title: ReactNode;
    time: ReactNode;
  };
};

type TimeCardOrganismProps = TimeCardOrganismOwnProps &
  Omit<CardRootProps, keyof TimeCardOrganismOwnProps>;

const TimeCardOrganism = (
  { className, data, ...props }: TimeCardOrganismProps,
  ref: TimeCardOrganismProps['ref']
) => {
  return (
    <Card.Root
      className={cn('min-h-52 items-center justify-center', className)}
      ref={ref}
      {...props}
    >
      <Title
        className='text-center text-dimmed'
        component='h4'
        order={6}
      >
        {data.title}
      </Title>

      <Text className='text-center text-[14vw] font-bold leading-none sm:text-[min(8vw,6rem)]'>
        {data.time}
      </Text>
    </Card.Root>
  );
};

export default forwardRef(TimeCardOrganism);
export type { TimeCardOrganismProps };
