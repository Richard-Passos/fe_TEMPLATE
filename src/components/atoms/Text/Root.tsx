import { Text, TextProps } from '@mantine/core';
import { PropsWithChildren } from 'react';

import { PolymorphicRef } from '@/types';

type TextAtomOwnProps = PropsWithChildren<{
  ref?: PolymorphicRef<'p'>;
}>;

type TextAtomProps = TextAtomOwnProps & Omit<TextProps, keyof TextAtomOwnProps>;

const TextAtom = Text;

export default TextAtom;
export type { TextAtomProps };
