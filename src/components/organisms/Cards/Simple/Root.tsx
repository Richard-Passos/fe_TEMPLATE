import { forwardRef } from 'react';

import { Icon, Text } from '@/components/atoms';
import { Card } from '@/components/molecules';
import { CardRootProps } from '@/components/molecules/Card';
import { cn } from '@/utils';

type SimpleCardOrganismOwnProps = {
  data: {
    icon: string;
    description: string;
  };
};

type SimpleCardOrganismProps = SimpleCardOrganismOwnProps &
  Omit<CardRootProps, keyof SimpleCardOrganismOwnProps>;

const SimpleCardOrganism = (
  { className, data, ...props }: SimpleCardOrganismProps,
  ref: SimpleCardOrganismProps['ref']
) => {
  return (
    <Card.Root
      className={cn('justify-between', className)}
      ref={ref}
      {...props}
    >
      <div className='size-6'>
        <Icon src={data.icon} />
      </div>

      <Text className='mt-xs font-medium leading-tight'>
        {data.description}
      </Text>
    </Card.Root>
  );
};

export default forwardRef(SimpleCardOrganism);
export type { SimpleCardOrganismProps };
