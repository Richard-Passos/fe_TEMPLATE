import { Badge, BadgeProps, createPolymorphicComponent } from '@mantine/core';
import { forwardRef } from 'react';

import { PolymorphicRef } from '@/types';
import { cn } from '@/utils';

const PRIMARY_VARIANTS = ['filled'];

type BadgeAtomOwnProps = {
  ref?: PolymorphicRef<'div'>;
};

type BadgeAtomProps = BadgeAtomOwnProps &
  Omit<BadgeProps, keyof BadgeAtomOwnProps>;

const BadgeAtom = (
  {
    color = 'primary',
    variant = 'filled',
    className,
    style,
    ...props
  }: BadgeAtomProps,
  ref: BadgeAtomProps['ref']
) => {
  const isPrimary = color === 'primary' && PRIMARY_VARIANTS.includes(variant);

  return (
    <Badge
      className={cn(
        'normal-case [--badge-fz-md:calc(.75rem*var(--mantine-scale))] [--badge-height-md:calc(1.5rem*var(--mantine-scale))]',
        className
      )}
      variant={variant}
      color={color}
      style={{
        ...(isPrimary && {
          '--badge-color': 'var(--mantine-primary-color-contrast)'
        }),
        ...style
      }}
      ref={ref}
      {...props}
    />
  );
};

export default createPolymorphicComponent<'div', BadgeAtomProps>(
  forwardRef(BadgeAtom)
);
export type { BadgeAtomProps };
