import { ReactNode, forwardRef } from 'react';

import { Badge, Text } from '@/components/atoms';
import { Card } from '@/components/molecules';
import { CardRootProps } from '@/components/molecules/Card';
import { cn } from '@/utils';

type DescriptionCardOrganismOwnProps = {
  data: {
    title: ReactNode;
    description: ReactNode;
  };
};

type DescriptionCardOrganismProps = DescriptionCardOrganismOwnProps &
  Omit<CardRootProps, keyof DescriptionCardOrganismOwnProps>;

const DescriptionCardOrganism = (
  { className, data, ...props }: DescriptionCardOrganismProps,
  ref: DescriptionCardOrganismProps['ref']
) => {
  return (
    <Card.Root
      className={cn('min-h-52 justify-between', className)}
      ref={ref}
      {...props}
    >
      <Badge
        className='text-dimmed'
        color='gray'
        size='md'
        variant='light'
      >
        {data.title}
      </Badge>

      <Text className='mt-xs'>{data.description}</Text>
    </Card.Root>
  );
};

export default forwardRef(DescriptionCardOrganism);
export type { DescriptionCardOrganismProps };
