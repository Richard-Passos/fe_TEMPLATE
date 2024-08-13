import { Indicator, IndicatorProps } from '@mantine/core';

import { PolymorphicRef } from '@/types';

type IndicatorAtomOwnProps = {
  ref?: PolymorphicRef<'div'>;
};

type IndicatorAtomProps = IndicatorAtomOwnProps &
  Omit<IndicatorProps, keyof IndicatorAtomOwnProps>;

const IndicatorAtom = Indicator;

export default IndicatorAtom;
export type { IndicatorAtomProps };
