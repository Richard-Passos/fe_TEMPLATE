'use client';

import { Slot } from '@radix-ui/react-slot';
import { ComponentPropsWithRef, ReactNode } from 'react';

type SlotUtilProps = ComponentPropsWithRef<typeof Slot>;

type SlotUtilAsChildProps<DefaultElementProps> =
  | ({ asChild?: false } & DefaultElementProps)
  | ({ asChild: true; children: ReactNode } & SlotUtilProps);

const SlotUtil = Slot;

export default SlotUtil;
export type { SlotUtilProps, SlotUtilAsChildProps };
