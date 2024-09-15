import { Blockquote, BlockquoteProps } from '@mantine/core';

import { PolymorphicRef } from '@/types';

type BlockquoteAtomOwnProps = {
  ref?: PolymorphicRef<'div'>;
};

type BlockquoteAtomProps = BlockquoteAtomOwnProps &
  Omit<BlockquoteProps, keyof BlockquoteAtomOwnProps>;

const BlockquoteAtom = Blockquote;

export default BlockquoteAtom;
export type { BlockquoteAtomProps };
