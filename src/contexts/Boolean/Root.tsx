'use client';

import { createContext } from 'react';

import { useBoolean } from '@/hooks';

type BooleanContextInitialState = {
  id: string;
  value: ReturnType<typeof useBoolean>['value'];
  setValue: ReturnType<typeof useBoolean>['setValue'];
  setTrue: ReturnType<typeof useBoolean>['setTrue'];
  setFalse: ReturnType<typeof useBoolean>['setFalse'];
  toggle: ReturnType<typeof useBoolean>['toggle'];
};

const disclosureContextDefaultValue: BooleanContextInitialState | undefined = {
  id: '',
  value: false,
  setValue: () => {},
  setTrue: () => {},
  setFalse: () => {},
  toggle: () => {}
};

const BooleanContext = createContext(disclosureContextDefaultValue);

export default BooleanContext;
export { disclosureContextDefaultValue };
export type { BooleanContextInitialState };
