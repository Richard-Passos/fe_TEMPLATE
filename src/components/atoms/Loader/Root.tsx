import { Loader, LoaderProps } from '@mantine/core';

import { PolymorphicRef } from '@/types';

type LoaderAtomOwnProps = {
  ref?: PolymorphicRef<'span'>;
};

type LoaderAtomProps = LoaderAtomOwnProps &
  Omit<LoaderProps, keyof LoaderAtomOwnProps>;

const LoaderAtom = Loader;

export default LoaderAtom;
export type { LoaderAtomProps };
