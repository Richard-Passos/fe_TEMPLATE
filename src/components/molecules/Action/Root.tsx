import { forwardRef } from 'react';

import { Button } from '@/components/atoms';
import type { ButtonProps } from '@/components/atoms/Button';

import Link, { type LinkProps } from './Link';

type ActionMoleculeOwnProps = {
  href?: string;
  ref?: any;
};

type ActionMoleculeProps = ActionMoleculeOwnProps &
  Omit<ButtonProps & LinkProps, keyof ActionMoleculeOwnProps>;

const ActionMolecule = (
  { href, ...props }: ActionMoleculeProps,
  ref: ActionMoleculeProps['ref']
) => {
  if (href)
    return (
      <Link
        href={href}
        ref={ref}
        {...(props as Omit<LinkProps, keyof ActionMoleculeOwnProps>)}
      />
    );

  return (
    <Button
      ref={ref}
      {...(props as Omit<ButtonProps, keyof ActionMoleculeOwnProps>)}
    />
  );
};

export default forwardRef(ActionMolecule);
export type { ActionMoleculeProps };
