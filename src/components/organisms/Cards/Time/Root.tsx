import { ReactNode, forwardRef } from 'react';

import { LocalTime, Text, Title } from '@/components/atoms';
import Card, { CardRootProps } from '@/components/molecules/Card';
import { cn } from '@/utils';
import serialize, { Node } from '@/utils/serialize';

type TimeCardOrganismOwnProps = {
  data: {
    title: Node[];
    time?: ReactNode;
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
        className='relative z-10 text-center text-sm uppercase text-dimmed'
        order={4}
      >
        {serialize(data.title)}
      </Title>

      <Text className='text-center text-[14vw] font-bold leading-none sm:text-[min(8vw,6rem)]'>
        {data.time ? data.time : <LocalTime />}
      </Text>
    </Card.Root>
  );
};

export default forwardRef(TimeCardOrganism);
export type { TimeCardOrganismProps };
