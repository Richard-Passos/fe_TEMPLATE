import { Box, BoxProps } from '@mantine/core';
import { PropsWithChildren } from 'react';

type BoxAtomOwnProps = PropsWithChildren<{
  ref?: PolymorphicRef<'div'>;
}>;

type BoxAtomProps = BoxAtomOwnProps & Omit<BoxProps, keyof BoxAtomOwnProps>;

const BoxAtom = Box;

export default BoxAtom;
export type { BoxAtomProps };
