import { Select, SelectProps } from '@mantine/core';

type SelectAtomOwnProps = {
  ref?: PolymorphicRef<'input'>;
};

type SelectAtomProps = SelectAtomOwnProps &
  Omit<SelectProps, keyof SelectAtomOwnProps>;

const SelectAtom = Select;

export default SelectAtom;
export type { SelectAtomProps };
