import { Badge, BadgeProps, createPolymorphicComponent } from '@mantine/core';
import { forwardRef } from 'react';

import { PolymorphicRef } from '@/types';
import { cn } from '@/utils';

type BadgeAtomOwnProps = {
  ref?: PolymorphicRef<'div'>;
};

type BadgeAtomProps = BadgeAtomOwnProps &
  Omit<BadgeProps, keyof BadgeAtomOwnProps>;

const BadgeAtom = (
  { className, ...props }: BadgeAtomProps,
  ref: BadgeAtomProps['ref']
) => {
  return (
    <Badge
      className={cn(
        'normal-case [--badge-fz-md:calc(.75rem*var(--mantine-scale))] [--badge-height-md:calc(1.5rem*var(--mantine-scale))]',
        className
      )}
      ref={ref}
      {...props}
    />
  );
};

export default createPolymorphicComponent<'div', BadgeAtomProps>(
  forwardRef(BadgeAtom)
);
export type { BadgeAtomProps };
