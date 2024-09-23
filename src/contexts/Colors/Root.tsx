'use client';

import { createContext } from 'react';

import { Color } from '@/types';

type ColorsContextInitialState = {
  colors: Color[];
  // eslint-disable-next-line no-unused-vars
  addColor: (color: Color) => void;
  // eslint-disable-next-line no-unused-vars
  removeColor: (color: Color) => void;
};

const ColorsContext = createContext<ColorsContextInitialState | undefined>(
  undefined
);

export default ColorsContext;
export type { ColorsContextInitialState };
