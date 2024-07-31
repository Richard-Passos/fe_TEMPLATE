import { Text, TextProps } from '@mantine/core';

type TextAtomOwnProps = {
  ref?: PolymorphicRef<'p'>;
};

type TextAtomProps = TextAtomOwnProps & Omit<TextProps, keyof TextAtomOwnProps>;

const TextAtom = Text;

export default TextAtom;
export type { TextAtomProps };
