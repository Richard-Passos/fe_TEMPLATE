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
  { isIconOnly, disabled, className, style, ...props }: ButtonAtomProps,
  ref: ButtonAtomProps['ref']
) => {
  className = cn(
    'aria-disabled:bg-gray-1 aria-disabled:text-gray-5 dark:aria-disabled:bg-dark-6 dark:aria-disabled:text-dark-3',
    className
  );

  if (isIconOnly)
    return (
      <ActionIcon
        aria-disabled={disabled}
        className={className}
        disabled={disabled}
        ref={ref}
        style={{
          '--button-bg': 'var(--ai-bg)',
          '--button-bd': 'var(--ai-bd)',
          '--button-color': 'var(--ai-color)',
          '--button-height': 'var(--ai-size)',
          '--button-hover': 'var(--ai-hover)',
          ...style
        }}
        variant='filled'
        {...props}
      />
    );

  return (
    <Button
      aria-disabled={disabled}
      className={className}
      disabled={disabled}
      ref={ref}
      style={style}
      variant='filled'
      {...props}
    />
  );
};

export default createPolymorphicComponent<'button', ButtonAtomProps>(
  forwardRef(ButtonAtom)
);
export type { ButtonAtomProps };
