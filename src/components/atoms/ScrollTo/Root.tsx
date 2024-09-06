'use client';

import { useLenis } from '@studio-freight/react-lenis';
import { forwardRef } from 'react';

import Slot, { SlotProps } from '@/components/atoms/Slot';

type ScrollToAtomOwnProps = {
  target: number | string | HTMLElement;
};

type ScrollToAtomProps = ScrollToAtomOwnProps &
  Omit<SlotProps, keyof ScrollToAtomOwnProps>;

const ScrollToAtom = (
  { target, ...props }: ScrollToAtomProps,
  ref: ScrollToAtomProps['ref']
) => {
  const lenis = useLenis();

  return (
    <Slot
      ref={ref}
      {...props}
      onClick={(ev) => {
        lenis?.scrollTo(target, {
          duration: 2,
          easing: (x) =>
            x < 0.5 ? 8 * x ** 4 : 1 - Math.pow(-2 * x + 2, 4) / 2 // easeInOutQuart
        });

        props.onClick?.(ev);
      }}
    />
  );
};

export default forwardRef(ScrollToAtom);

export type { ScrollToAtomProps };
