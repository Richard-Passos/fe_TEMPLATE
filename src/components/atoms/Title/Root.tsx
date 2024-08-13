import { Title, TitleProps } from '@mantine/core';

import { PolymorphicRef } from '@/types';

type TitleAtomOwnProps = {
  ref?: PolymorphicRef<'h1'>;
};

type TitleAtomProps = TitleAtomOwnProps &
  Omit<TitleProps, keyof TitleAtomOwnProps>;

const TitleAtom = Title;

export default TitleAtom;
export type { TitleAtomProps };
