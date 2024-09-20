import { forwardRef } from 'react';

import { Icon, Text, Title } from '@/components/atoms';
import UnstyledLink from '@/components/atoms/Link/Unstyled';
import { CardRoot, CardRootProps } from '@/components/molecules/Card';
import { urlRegex } from '@/constants/regexs';
import { cn } from '@/utils';
import serialize, { Node } from '@/utils/serialize';

type LinkCardOrganismOwnProps = {
  data: {
    href: string;
    icon: string;
    title: Node[];
  };
};

type LinkCardOrganismProps = LinkCardOrganismOwnProps &
  Omit<CardRootProps, keyof LinkCardOrganismOwnProps>;

const LinkCardOrganism = (
  { className, data, ...props }: LinkCardOrganismProps,
  ref: LinkCardOrganismProps['ref']
) => {
  return (
    <CardRoot
      className={cn('min-h-52 overflow-visible border-transparent', className)}
      ref={ref}
      {...props}
    >
      <UnstyledLink
        className={`-m-[(var(--card-padding)_+_1px)] flex min-h-52 flex-col items-center justify-center rounded-inherit border p-[--card-padding] font-normal text-current no-underline hover:bg-gray-0 dark:hover:bg-dark-6`}
        href={data.href}
      >
        <div
          className={`flex size-10 items-center justify-center rounded-sm border`}
        >
          <Icon
            className='size-2/3'
            src={data.icon}
          />
        </div>

        <Title
          className='mt-sm text-center text-sm'
          order={4}
        >
          {serialize(data.title)}
        </Title>

        <Text className='text-center text-sm text-dimmed'>
          {data.href.replace(urlRegex, '$3$4')}
        </Text>
      </UnstyledLink>
    </CardRoot>
  );
};

export default forwardRef(LinkCardOrganism);
export type { LinkCardOrganismProps };
