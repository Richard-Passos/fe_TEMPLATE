import { Text, type TextProps } from '@mantine/core';

type TextAtomOwnProps = {
  ref?: PolimorphicRef<'p'>;
};

type TextAtomProps = TextAtomOwnProps & Omit<TextProps, keyof TextAtomOwnProps>;

const TextAtom = Text;

export default TextAtom;
export type { TextAtomProps };
