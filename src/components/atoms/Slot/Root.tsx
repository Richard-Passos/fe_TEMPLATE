'use client';

import { Slot } from '@radix-ui/react-slot';
import React, { ComponentPropsWithRef } from 'react';

type SlotAtomAsChildProps<DefaultElementProps> =
  | ({ asChild?: false } & DefaultElementProps)
  | ({ asChild: true; children: React.ReactNode } & ComponentPropsWithRef<
      typeof Slot
    >);

type SlotAtomOwnProps = {
  [key: string]: any;
};

type SlotAtomProps = SlotAtomOwnProps &
  Omit<ComponentPropsWithRef<typeof Slot>, keyof SlotAtomOwnProps>;

const SlotAtom = Slot;

export default SlotAtom;
export type { SlotAtomProps, SlotAtomAsChildProps };
