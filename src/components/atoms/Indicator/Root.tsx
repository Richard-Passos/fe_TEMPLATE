import { Indicator, IndicatorProps } from '@mantine/core';

type IndicatorAtomOwnProps = {
  ref?: PolymorphicRef<'div'>;
};

type IndicatorAtomProps = IndicatorAtomOwnProps &
  Omit<IndicatorProps, keyof IndicatorAtomOwnProps>;

const IndicatorAtom = Indicator;

export default IndicatorAtom;
export type { IndicatorAtomProps };
