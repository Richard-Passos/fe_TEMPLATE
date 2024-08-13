import { Select, SelectProps } from '@mantine/core';

import { PolymorphicRef } from '@/types';

type SelectAtomOwnProps = {
  ref?: PolymorphicRef<'input'>;
};

type SelectAtomProps = SelectAtomOwnProps &
  Omit<SelectProps, keyof SelectAtomOwnProps>;

const SelectAtom = Select;

export default SelectAtom;
export type { SelectAtomProps };
