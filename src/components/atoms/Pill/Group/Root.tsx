import { PillGroup, PillGroupProps } from '@mantine/core';

import { PolymorphicRef } from '@/types';

type PillGroupAtomOwnProps = {
  ref?: PolymorphicRef<'q'>;
};

type PillGroupAtomProps = PillGroupAtomOwnProps &
  Omit<PillGroupProps, keyof PillGroupAtomOwnProps>;

const PillGroupAtom = PillGroup;

export default PillGroupAtom;
export type { PillGroupAtomProps };
