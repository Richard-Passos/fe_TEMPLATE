import { Pill, PillProps } from '@mantine/core';

import { PolymorphicRef } from '@/types';

type PillAtomOwnProps = {
  ref?: PolymorphicRef<'div'>;
};

type PillAtomProps = PillAtomOwnProps & Omit<PillProps, keyof PillAtomOwnProps>;

const PillAtom = Pill;

export default PillAtom;
export type { PillAtomProps };
