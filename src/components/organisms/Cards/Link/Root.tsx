import { ComponentPropsWithRef, forwardRef } from 'react';

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
  linkProps?: Partial<LinkCardClientProps>;
};

type LinkCardOrganismProps = LinkCardOrganismOwnProps &
  Omit<ComponentPropsWithRef<'li'>, keyof LinkCardOrganismOwnProps>;

const LinkCardOrganism = (
  { className, data, linkProps, ...props }: LinkCardOrganismProps,
  ref: LinkCardOrganismProps['ref']
) => {
  return (
    <li
      ref={ref}
      {...props}
    >
      <LinkCardClient
        href={data.href}
        {...linkProps}
        className={cn('h-auto', linkProps?.className)}
      >
        <div className='flex min-h-52 flex-col items-center justify-center'>
          <div className='flex size-10 items-center justify-center rounded-sm border border-solid border-border'>
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
    </li>
  );
};

export default forwardRef(LinkCardOrganism);
export type { LinkCardOrganismProps };
