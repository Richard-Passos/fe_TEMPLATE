import { Box, BoxProps } from '@mantine/core';

type BoxAtomOwnProps = {
  ref?: PolymorphicRef<'div'>;
};

type BoxAtomProps = BoxAtomOwnProps & Omit<BoxProps, keyof BoxAtomOwnProps>;

const BoxAtom = Box;

export default BoxAtom;
export type { BoxAtomProps };
