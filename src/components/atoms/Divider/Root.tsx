import { Divider, DividerProps } from '@mantine/core';
import { forwardRef } from 'react';

import { PolymorphicRef } from '@/types';
import { cn } from '@/utils';

type DividerAtomOwnProps = {
  ref?: PolymorphicRef<'div'>;
};

type DividerAtomProps = DividerAtomOwnProps &
  Omit<DividerProps, keyof DividerAtomOwnProps>;

const DividerAtom = (
  { className, ...props }: DividerAtomProps,
  ref: DividerAtomProps['ref']
) => {
  return (
    <Divider
      className={cn(
        `
          [--divider-color:theme(colors.border)]

          dark:[--divider-color:theme(colors.border)]
        `,
        className
      )}
      ref={ref}
      {...props}
    />
  );
};

export default forwardRef(DividerAtom);
export type { DividerAtomProps };
