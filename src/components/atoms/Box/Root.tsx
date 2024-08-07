import { Box, BoxProps } from '@mantine/core';
import { PropsWithChildren, forwardRef } from 'react';

type BoxAtomOwnProps = PropsWithChildren<{
  ref?: PolymorphicRef<'div'>;
  id?: string;
}>;

type BoxAtomProps = BoxAtomOwnProps & Omit<BoxProps, keyof BoxAtomOwnProps>;

const BoxAtom = (props: BoxAtomProps, ref: BoxAtomProps['ref']) => {
  return (
    <Box
      ref={ref}
      {...props}
    />
  );
};

export default forwardRef(BoxAtom);
export type { BoxAtomProps };
