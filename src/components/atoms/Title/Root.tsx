import { Title, type TitleProps } from '@mantine/core';

type TitleAtomOwnProps = {
  ref?: PolimorphicRef<'h1'>;
};

type TitleAtomProps = TitleAtomOwnProps &
  Omit<TitleProps, keyof TitleAtomOwnProps>;

const TitleAtom = Title;

export default TitleAtom;
export type { TitleAtomProps };
