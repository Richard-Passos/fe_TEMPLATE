import { Title, TitleOrder, TitleProps } from '@mantine/core';

import { PolymorphicRef } from '@/types';

type TitleAtomOrder = TitleOrder;

type TitleAtomOwnProps = {
  ref?: PolymorphicRef<'h1'>;
};

type TitleAtomProps = TitleAtomOwnProps &
  Omit<TitleProps, keyof TitleAtomOwnProps>;

const TitleAtom = Title;

export default TitleAtom;
export type { TitleAtomProps, TitleAtomOrder };
