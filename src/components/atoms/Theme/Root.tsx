'use client';

import { forwardRef } from 'react';

import Slot, { SlotProps } from '@/components/atoms/Slot';
import { useThemeContext } from '@/hooks/contexts';

type ThemeAtomOwnProps = {};

type ThemeAtomProps = ThemeAtomOwnProps &
  Omit<SlotProps, keyof ThemeAtomOwnProps>;

const ThemeAtom = (props: ThemeAtomProps, ref: ThemeAtomProps['ref']) => {
  const { theme } = useThemeContext();

  return (
    <Slot
      data-theme={theme}
      ref={ref}
      {...props}
    />
  );
};

export default forwardRef(ThemeAtom);
export type { ThemeAtomProps };
