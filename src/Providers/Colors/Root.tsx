'use client';

import { ReactNode, useCallback, useMemo, useState } from 'react';

import ColorsContext, { ColorsContextInitialState } from '@/contexts/Colors';
import { Color } from '@/types';

type ColorsProviderProps = {
  children: ReactNode;
};

const ColorsProvider = (props: ColorsProviderProps) => {
  const [colors, setColors] = useState<Set<Color>>(new Set());

  const addColor = useCallback((color: Color) => {
    setColors((state) => new Set([...Array.from(state), color]));
  }, []);

  const removeColor = useCallback((color: Color) => {
    setColors((state) => {
      const colors = new Set(state);

      colors.delete(color);

      return colors;
    });
  }, []);

  const value: ColorsContextInitialState = useMemo(
    () => ({
      colors: Array.from(colors),
      addColor,
      removeColor
    }),
    [colors, addColor, removeColor]
  );

  return (
    <ColorsContext.Provider
      value={value}
      {...props}
    />
  );
};

export default ColorsProvider;
export type { ColorsProviderProps };
