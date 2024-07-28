import {
  ActionIcon,
  type ActionIconProps,
  Button,
  type ButtonProps,
  createPolymorphicComponent
} from '@mantine/core';
import { ComponentPropsWithRef, forwardRef } from 'react';

type ButtonAtomOwnProps = {
  isIconOnly?: boolean;
  ref?: ComponentPropsWithRef<'button'>['ref'];
};

type ButtonAtomProps = ButtonAtomOwnProps &
  Omit<ButtonProps, keyof ButtonAtomOwnProps>;

const ButtonAtom = (
  { isIconOnly, ...props }: ButtonAtomProps,
  ref: ButtonAtomProps['ref']
) => {
  if (isIconOnly)
    return (
      <ActionIcon
        ref={ref}
        {...(props as Omit<ActionIconProps, keyof ButtonAtomOwnProps>)}
      />
    );

  return (
    <Button
      ref={ref}
      {...(props as Omit<ButtonProps, keyof ButtonAtomOwnProps>)}
    />
  );
};

export default createPolymorphicComponent<'button', ButtonAtomProps>(
  forwardRef(ButtonAtom)
);
export type { ButtonAtomProps };
