import { forwardRef } from 'react';

import { Icon, Text, Title } from '@/components/atoms';
import { urlRegex } from '@/constants/regexs';
import { cn } from '@/utils';

import LinkCardClient, { LinkCardClientProps } from './Client';

type LinkCardOrganismOwnProps = {
  data: {
    href: string;
    icon: string;
    title: string;
  };
};

type LinkCardOrganismProps = LinkCardOrganismOwnProps &
  Omit<LinkCardClientProps, keyof LinkCardOrganismOwnProps | 'href'>;

const LinkCardOrganism = (
  { className, data, ...props }: LinkCardOrganismProps,
  ref: LinkCardOrganismProps['ref']
) => {
  return (
    <LinkCardClient
      className={cn('min-h-52', className)}
      href={data.href}
      ref={ref}
      {...props}
    >
      <div className='flex min-h-52 flex-col items-center justify-center'>
        <div className='flex size-10 items-center justify-center rounded-sm border'>
          <Icon
            className='size-2/3'
            src={data.icon}
          />
        </div>

        <Title
          className='mt-sm text-center'
          order={6}
        >
          {data.title}
        </Title>

        <Text className='text-center text-sm text-dimmed'>
          {data.href?.replace(urlRegex, '$3$4')}
        </Text>
      </div>
    </LinkCardClient>
  );
};

export default forwardRef(LinkCardOrganism);
export type { LinkCardOrganismProps };
