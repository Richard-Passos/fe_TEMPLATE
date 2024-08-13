import { Divider, DividerProps } from '@mantine/core';

import { PolymorphicRef } from '@/types';

type DividerAtomOwnProps = {
  ref?: PolymorphicRef<'div'>;
};

type DividerAtomProps = DividerAtomOwnProps &
  Omit<DividerProps, keyof DividerAtomOwnProps>;

const DividerAtom = Divider;

export default DividerAtom;
export type { DividerAtomProps };
