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
        'absolute inset-y-0 left-1/2 -z-50 w-screen -translate-x-1/2 overflow-hidden bg-white dark:bg-black',
        className
      )}
      ref={ref}
      {...props}
    />
  );
};

export default forwardRef(BgAtom);

export type { BgAtomProps };
