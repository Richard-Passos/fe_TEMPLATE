import { Button, ButtonProps, createPolymorphicComponent } from '@mantine/core';
import { ComponentPropsWithRef, forwardRef } from 'react';

import { cn } from '@/utils';

const PRIMARY_VARIANTS = ['filled'];

type ButtonAtomOwnProps = {
  isIconOnly?: boolean;
  isLoading?: boolean;
};

type ButtonAtomProps = ButtonAtomOwnProps &
  Omit<
    ButtonProps & Omit<ComponentPropsWithRef<'button'>, keyof ButtonProps>,
    'loading' | keyof ButtonAtomOwnProps
  >;

const ButtonAtom = (
  {
    isIconOnly,
    isLoading,
    variant = 'filled',
    color = 'primary',
    disabled,
    className,
    style,
    ...props
  }: ButtonAtomProps,
  ref: ButtonAtomProps['ref']
) => {
  const isPrimary = color === 'primary' && PRIMARY_VARIANTS.includes(variant);

  return (
    <Button
      aria-disabled={disabled}
      className={cn(
        '*:*:relative aria-disabled:bg-gray-1 aria-disabled:text-gray-5 dark:aria-disabled:bg-dark-6 dark:aria-disabled:text-dark-3',
        isIconOnly && 'aspect-square p-0 [--button-padding-x:0px] *:*:grow',
        className
      )}
      color={color}
      disabled={disabled}
      loading={isLoading}
      ref={ref}
      style={{
        ...(isPrimary && {
          '--button-color': 'var(--mantine-primary-color-contrast)'
        }),
        ...style
      }}
      variant={variant}
      {...props}
    />
  );
};

export default createPolymorphicComponent<'button', ButtonAtomProps>(
  forwardRef(ButtonAtom)
);

export type { ButtonAtomProps };
