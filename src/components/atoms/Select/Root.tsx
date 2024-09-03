import { Select, SelectProps, createPolymorphicComponent } from '@mantine/core';
import { forwardRef } from 'react';

import { PolymorphicRef } from '@/types';
import { cn } from '@/utils';

const CLASS_NAMES = {
  size: {
    xs: '',
    sm: '',
    md: '[&_input]:[--input-size:theme(height.12)]',
    lg: '',
    xl: ''
  },
  variant: {
    default:
      '[&_input]:[--input-bg:theme(colors.white)] dark:[&_input]:[--input-bg:theme(colors.dark.6)]',
    filled:
      '[&_input]:[--input-bg:theme(colors.gray.1)] dark:[&_input]:[--input-bg:theme(colors.dark.5)]',
    unstyled: ''
  }
};

type SelectAtomOwnProps = {
  ref?: PolymorphicRef<'input'>;
  size?: keyof (typeof CLASS_NAMES)['size'];
  variant?: keyof (typeof CLASS_NAMES)['variant'];
};

type SelectAtomProps = SelectAtomOwnProps &
  Omit<SelectProps, keyof SelectAtomOwnProps>;

const SelectAtom = (
  {
    className,
    size = 'sm',
    variant = 'default',
    disabled,
    comboboxProps,
    labelProps,
    ...props
  }: SelectAtomProps,
  ref: SelectAtomProps['ref']
) => {
  return (
    <Select
      aria-disabled={disabled}
      className={cn(
        'aria-disabled:[&_input]:bg-gray-1 aria-disabled:[&_input]:text-gray-6 dark:aria-disabled:[&_input]:bg-dark-6 dark:aria-disabled:[&_input]:text-dark-2',
        CLASS_NAMES.size[size],
        CLASS_NAMES.variant[variant],
        className
      )}
      comboboxProps={{
        withinPortal: false,
        ...comboboxProps,
        classNames: {
          ...comboboxProps?.classNames,
          dropdown: cn(
            'bg-white dark:bg-dark-6 [--popover-border-color:theme(colors.border)]',
            //@ts-ignore
            comboboxProps?.classNames?.dropdown
          ),
          option: cn(
            'hover:bg-gray-0 dark:hover:bg-dark-7',
            //@ts-ignore
            comboboxProps?.classNames?.option
          )
        }
      }}
      disabled={disabled}
      labelProps={{
        ...labelProps,
        className: cn('text-sm', labelProps?.className)
      }}
      ref={ref}
      size={size}
      variant={variant}
      {...props}
    />
  );
};

export default createPolymorphicComponent<'input', SelectAtomProps>(
  forwardRef(SelectAtom)
);
export type { SelectAtomProps };
