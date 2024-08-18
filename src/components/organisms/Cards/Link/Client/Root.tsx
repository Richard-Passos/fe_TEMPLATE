'use client';

import { forwardRef } from 'react';

import { Button } from '@/components/atoms';
import { ButtonProps } from '@/components/atoms/Button';
import UnstyledLink, {
  UnstyledLinkProps
} from '@/components/atoms/Link/Unstyled';
import { CardRoot, CardRootProps } from '@/components/molecules/Card';
import { cn } from '@/utils';

type LinkCardClientOrganismOwnProps = {};

type LinkCardClientOrganismProps = LinkCardClientOrganismOwnProps &
  Omit<
    ButtonProps & UnstyledLinkProps & CardRootProps,
    keyof LinkCardClientOrganismOwnProps
  >;

const LinkCardClientOrganism = (
  { className, ...props }: LinkCardClientOrganismProps,
  ref: LinkCardClientOrganismProps['ref']
) => {
  return (
    <CardRoot
      className={cn(
        'dark:hover:bg-[--button-hover] light:hover:bg-[--button-hover]',
        className
      )}
      component={(props: ButtonProps & UnstyledLinkProps) => (
        <Button
          component={UnstyledLink}
          variant='default'
          {...props}
        />
      )}
      ref={ref}
      {...props}
    />
  );
};

export default forwardRef(LinkCardClientOrganism);
export type { LinkCardClientOrganismProps };
