import { forwardRef } from 'react';

import { Title } from '@/components/atoms';
import { TitleProps } from '@/components/atoms/Title';
import Card, { CardRootProps } from '@/components/molecules/Card';
import { cn } from '@/utils';

type TextCardOrganismOwnProps = {
  data: {
    description: TitleProps['children'];
  };
};

type TextCardOrganismProps = TextCardOrganismOwnProps &
  Omit<CardRootProps, keyof TextCardOrganismOwnProps>;

const TextCardOrganism = (
  { className, data, ...props }: TextCardOrganismProps,
  ref: TextCardOrganismProps['ref']
) => {
  return (
    <Card.Root
      className={cn('h-full min-h-52', className)}
      ref={ref}
      {...props}
    >
      <Title
        className='font-medium'
        component='p'
        order={5}
      >
        {data.description}
      </Title>
    </Card.Root>
  );
};

export default forwardRef(TextCardOrganism);
export type { TextCardOrganismProps };
