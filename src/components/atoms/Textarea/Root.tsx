import {
  Textarea,
  TextareaProps,
  createPolymorphicComponent
} from '@mantine/core';
import { forwardRef } from 'react';

import { PolymorphicRef } from '@/types';
import { cn } from '@/utils';

const CLASS_NAMES = {
  size: {
    xs: '',
    sm: '',
    md: '[&_textarea]:[--input-size:theme(height.24)] [&_textarea]:[--input-padding-y:--input-padding]',
    lg: '',
    xl: ''
  },
  variant: {
    default:
      '[&_textarea]:[--input-bg:theme(colors.white)] dark:[&_textarea]:[--input-bg:theme(colors.dark.6)]',
    filled:
      '[&_textarea]:[--input-bg:theme(colors.gray.1)] dark:[&_textarea]:[--input-bg:theme(colors.dark.5)]',
    unstyled: ''
  }
};

type TextareaAtomOwnProps = {
  ref?: PolymorphicRef<'textarea'>;
  size?: keyof (typeof CLASS_NAMES)['size'];
  variant?: keyof (typeof CLASS_NAMES)['variant'];
};

type TextareaAtomProps = TextareaAtomOwnProps &
  Omit<TextareaProps, keyof TextareaAtomOwnProps>;

const TextareaAtom = (
  {
    className,
    size = 'sm',
    variant = 'default',
    labelProps,
    ...props
  }: TextareaAtomProps,
  ref: TextareaAtomProps['ref']
) => {
  return (
    <Textarea
      className={cn(
        CLASS_NAMES.size[size],
        CLASS_NAMES.variant[variant],
        className
      )}
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

export default createPolymorphicComponent<'textarea', TextareaAtomProps>(
  forwardRef(TextareaAtom)
);
export type { TextareaAtomProps };
