'use client';

import { forwardRef } from 'react';

import Button, { ButtonProps } from '@/components/atoms/Button';
import UnstyledLink, {
  UnstyledLinkProps
} from '@/components/atoms/Link/Unstyled';

type ActionLinkMoleculeOwnProps = ButtonProps;

type ActionLinkMoleculeProps = ActionLinkMoleculeOwnProps &
  Omit<UnstyledLinkProps, keyof Omit<ActionLinkMoleculeOwnProps, 'ref'>>;

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
