import { Indicator, type IndicatorProps } from '@mantine/core';

type IndicatorAtomOwnProps = {
  ref?: PolimorphicRef<'div'>;
};

type IndicatorAtomProps = IndicatorAtomOwnProps &
  Omit<IndicatorProps, keyof IndicatorAtomOwnProps>;

const IndicatorAtom = Indicator;

export default IndicatorAtom;
export type { IndicatorAtomProps };
