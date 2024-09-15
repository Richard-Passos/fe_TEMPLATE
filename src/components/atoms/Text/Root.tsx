import { Text, TextProps } from '@mantine/core';
import { ComponentPropsWithRef } from 'react';

type TextAtomOwnProps = TextProps;

type TextAtomProps = TextAtomOwnProps &
  Omit<ComponentPropsWithRef<'p'>, keyof TextAtomOwnProps>;

const TextAtom = Text;

export default TextAtom;
export type { TextAtomProps };
