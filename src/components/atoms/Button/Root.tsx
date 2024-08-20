import {
  ActionIcon,
  ActionIconProps,
  Button,
  ButtonProps,
  createPolymorphicComponent
} from '@mantine/core';
import { ComponentPropsWithRef, forwardRef } from 'react';

import { PolymorphicRef } from '@/types';
import { cn } from '@/utils';

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
  { style, isIconOnly, className, ...props }: ButtonAtomProps,
  ref: ButtonAtomProps['ref']
) => {
  if (isIconOnly)
    return (
      <ActionIcon
        className={cn('disabled:pointer-events-none', className)}
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
      className={cn('disabled:pointer-events-none', className)}
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
