'use client';

import { createContext } from 'react';

import { useBoolean } from '@/hooks';

type BooleanContextInitialState = {
  value: ReturnType<typeof useBoolean>['value'];
  setValue: ReturnType<typeof useBoolean>['setValue'];
  setTrue: ReturnType<typeof useBoolean>['setTrue'];
  setFalse: ReturnType<typeof useBoolean>['setFalse'];
  toggle: ReturnType<typeof useBoolean>['toggle'];
};

const BooleanContext = createContext<BooleanContextInitialState | undefined>(
  undefined
);

export default BooleanContext;
export type { BooleanContextInitialState };
