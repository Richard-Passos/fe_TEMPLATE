import { forwardRef } from 'react';

import { Button } from '@/components/atoms';
import { ButtonProps } from '@/components/atoms/Button';
import { cn } from '@/utils';

import ActionLink, { ActionLinkProps } from './Link';

type ActionMoleculeOwnProps = {
  ref?: any;
};

type ActionMoleculeProps = ActionMoleculeOwnProps &
  (
    | ({
        as: 'link';
      } & Omit<ActionLinkProps, 'ref' | keyof ActionMoleculeOwnProps>)
    | ({
        as?: 'button';
      } & Omit<ButtonProps, 'ref' | keyof ActionMoleculeOwnProps>)
  );

const ActionMolecule = (
  { className, ...props }: ActionMoleculeProps,
  ref: ActionMoleculeProps['ref']
) => {
  const defaultProps = {
    className: cn('group/action relative', className),
    ref
  };

  if (props.as === 'link') {
    const { as: _, ...rest } = props;

    return (
      <ActionLink
        {...defaultProps}
        {...rest}
      />
    );
  }

  const { as: _, ...rest } = props;

  return (
    <Button
      {...defaultProps}
      {...rest}
    />
  );
};

export default forwardRef(ActionMolecule);
export type { ActionMoleculeProps };
