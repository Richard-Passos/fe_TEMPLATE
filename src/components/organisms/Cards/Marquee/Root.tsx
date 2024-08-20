import { forwardRef } from 'react';

import { Badge, Icon, Marquee, Title } from '@/components/atoms';
import Card, { CardRootProps } from '@/components/molecules/Card';
import { cn } from '@/utils';

type MarqueeCardOrganismOwnProps = {
  data: {
    icon: string;
    title: string;
    items: string[];
  };
};

type MarqueeCardOrganismProps = MarqueeCardOrganismOwnProps &
  Omit<CardRootProps, keyof MarqueeCardOrganismOwnProps>;

const MarqueeCardOrganism = (
  { className, data, ...props }: MarqueeCardOrganismProps,
  ref: MarqueeCardOrganismProps['ref']
) => {
  return (
    <Card.Root
      className={cn('min-h-52', className)}
      ref={ref}
      {...props}
    >
      <div className='size-8'>
        <Icon src={data.icon} />
      </div>

      <Card.Section className='my-auto flex flex-col items-center justify-center gap-sm'>
        <Title
          className='text-center font-semibold'
          component='h4'
          order={5}
        >
          {data.title}
        </Title>

        <Marquee
          className='[--gap:theme(spacing.xs)]'
          pauseOnHover
        >
          {data.items.map((item, i) => (
            <Badge
              {...(i % 2 !== 0 && {
                variant: 'light',
                color: 'gray'
              })}
              component='li'
              key={item}
              size='lg'
            >
              <li>{item}</li>
            </Badge>
          ))}
        </Marquee>
      </Card.Section>
    </Card.Root>
  );
};

export default forwardRef(MarqueeCardOrganism);
export type { MarqueeCardOrganismProps };
