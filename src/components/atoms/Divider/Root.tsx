import { Divider, type DividerProps } from '@mantine/core';

type DividerAtomOwnProps = {
  ref?: PolimorphicRef<'div'>;
};

type DividerAtomProps = DividerAtomOwnProps &
  Omit<DividerProps, keyof DividerAtomOwnProps>;

const DividerAtom = Divider;

export default DividerAtom;
export type { DividerAtomProps };
