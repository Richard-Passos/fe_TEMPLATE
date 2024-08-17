'use client';

import { forwardRef } from 'react';

import { Button } from '@/components/atoms';
import { ButtonProps } from '@/components/atoms/Button';
import UnstyledLink, {
  UnstyledLinkProps
} from '@/components/atoms/Link/Unstyled';
import { CardRoot, CardRootProps } from '@/components/molecules/Card';

type LinkCardClientOrganismOwnProps = {};

type LinkCardClientOrganismProps = LinkCardClientOrganismOwnProps &
  Omit<
    ButtonProps & UnstyledLinkProps & CardRootProps,
    keyof LinkCardClientOrganismOwnProps
  >;

const LinkCardClientOrganism = (
  props: LinkCardClientOrganismProps,
  ref: LinkCardClientOrganismProps['ref']
) => {
  return (
    <CardRoot
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
