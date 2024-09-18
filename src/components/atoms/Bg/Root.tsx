import { Box, BoxProps, DefaultMantineColor, StyleProp } from '@mantine/core';
import { PropsWithChildren, forwardRef } from 'react';

import { PolymorphicRef } from '@/types';
import { cn } from '@/utils';

type BgAtomOwnProps = PropsWithChildren<{
  color?: StyleProp<DefaultMantineColor>;
  ref?: PolymorphicRef<'div'>;
}>;

type BgAtomProps = BgAtomOwnProps & Omit<BoxProps, keyof BgAtomOwnProps>;

const BgAtom = (
  { className, color, ...props }: BgAtomProps,
  ref: BgAtomProps['ref']
) => {
  return (
    <Box
      bg={color}
      className={cn(
        `
          pointer-events-none absolute inset-y-0 -z-50 w-screen overflow-hidden
          bg-white

          dark:bg-dark-8
        `,
        className
      )}
      ref={ref}
      {...props}
    />
  );
};

export default forwardRef(BgAtom);

export type { BgAtomProps };
