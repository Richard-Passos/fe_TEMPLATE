'use client';

import { Slot } from '@radix-ui/react-slot';
import { ComponentPropsWithRef, ReactNode } from 'react';

type SlotProps = ComponentPropsWithRef<typeof Slot>;

type SlotUtilAsChildProps<DefaultElementProps> =
  | ({ asChild?: false } & DefaultElementProps)
  | ({ asChild: true; children: ReactNode } & SlotProps);

type SlotUtilProps = SlotProps;

const SlotUtil = Slot;

export default SlotUtil;
export type { SlotUtilProps, SlotUtilAsChildProps };
