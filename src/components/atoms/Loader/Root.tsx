import { Loader, LoaderProps } from '@mantine/core';

type LoaderAtomOwnProps = {
  ref?: PolymorphicRef<'span'>;
};

type LoaderAtomProps = LoaderAtomOwnProps &
  Omit<LoaderProps, keyof LoaderAtomOwnProps>;

const LoaderAtom = Loader;

export default LoaderAtom;
export type { LoaderAtomProps };
