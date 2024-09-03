import { Slot } from '@radix-ui/react-slot';
import { ComponentPropsWithRef } from 'react';

type SlotAtomAsChildProps<DefaultElementProps> =
  | ({ asChild?: false } & DefaultElementProps)
  | ({ asChild: true; children: React.ReactNode } & ComponentPropsWithRef<
      typeof Slot
    >);

type SlotAtomOwnProps = {};

type SlotAtomProps = SlotAtomOwnProps &
  Omit<ComponentPropsWithRef<typeof Slot>, keyof SlotAtomOwnProps>;

const SlotAtom = Slot;

export default SlotAtom;
export type { SlotAtomProps, SlotAtomAsChildProps };
