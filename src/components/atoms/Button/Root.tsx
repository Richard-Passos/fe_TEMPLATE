import {
  ActionIcon,
  ActionIconProps,
  Button,
  ButtonProps,
  createPolymorphicComponent
} from '@mantine/core';
import { ComponentPropsWithRef, forwardRef } from 'react';

import { PolymorphicRef } from '@/types';

type ButtonAtomOwnProps = {
  isIconOnly?: boolean;
  ref?: PolymorphicRef<'button'>;
};

type ButtonAtomProps = ButtonAtomOwnProps &
  Omit<
    ComponentPropsWithRef<'button'> & ButtonProps & ActionIconProps,
    keyof ButtonAtomOwnProps
  >;

const ButtonAtom = (
  { style, isIconOnly, ...props }: ButtonAtomProps,
  ref: ButtonAtomProps['ref']
) => {
  if (isIconOnly)
    return (
      <ActionIcon
        ref={ref}
        style={{
          '--button-bg': 'var(--ai-bg)',
          '--button-bd': 'var(--ai-bd)',
          '--button-color': 'var(--ai-color)',
          '--button-height': 'var(--ai-size)',
          '--button-hover': 'var(--ai-hover)',
          ...style
        }}
        {...props}
      />
    );

  return (
    <Button
      ref={ref}
      style={style}
      {...props}
    />
  );
};

export default createPolymorphicComponent<'button', ButtonAtomProps>(
  forwardRef(ButtonAtom)
);
export type { ButtonAtomProps };
