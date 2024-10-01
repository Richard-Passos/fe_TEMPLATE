import { Slottable } from '@radix-ui/react-slot';
import { ComponentPropsWithRef } from 'react';

type SlottableAtomOwnProps = {};

type SlottableAtomProps = SlottableAtomOwnProps &
  Omit<ComponentPropsWithRef<typeof Slottable>, keyof SlottableAtomOwnProps>;

const SlottableAtom = Slottable;

export default SlottableAtom;
export type { SlottableAtomProps };
