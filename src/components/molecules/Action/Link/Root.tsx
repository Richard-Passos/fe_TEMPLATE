'use client';

import { forwardRef } from 'react';

import Button, { ButtonProps } from '@/components/atoms/Button';
import UnstyledLink, {
  UnstyledLinkProps
} from '@/components/atoms/Link/Unstyled';

type ActionLinkMoleculeOwnProps = {
  ref?: UnstyledLinkProps['ref'] & ButtonProps['ref'];
};

type ActionLinkMoleculeProps = ActionLinkMoleculeOwnProps &
  Omit<ButtonProps & UnstyledLinkProps, keyof ActionLinkMoleculeOwnProps>;

const ActionLinkMolecule = (
  props: ActionLinkMoleculeProps,
  ref: ActionLinkMoleculeProps['ref']
) => {
  return (
    <Button
      component={UnstyledLink}
      ref={ref}
      {...props}
    />
  );
};

export default forwardRef(ActionLinkMolecule);
export type { ActionLinkMoleculeProps };
