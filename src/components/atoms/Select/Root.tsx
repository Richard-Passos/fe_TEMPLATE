import { Select, type SelectProps } from '@mantine/core';

type SelectAtomOwnProps = {
  ref?: PolimorphicRef<'input'>;
};

type SelectAtomProps = SelectAtomOwnProps &
  Omit<SelectProps, keyof SelectAtomOwnProps>;

const SelectAtom = Select;

export default SelectAtom;
export type { SelectAtomProps };
