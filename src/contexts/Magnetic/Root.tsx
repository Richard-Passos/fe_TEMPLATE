'use client';

import { RefObject, createContext } from 'react';

type MagneticContextInitialState = {
  id: string;
  container: RefObject<HTMLElement>;
};

const magneticContextDefaultValue: MagneticContextInitialState = {
  id: '',
  container: { current: null }
};

const MagneticContext = createContext(magneticContextDefaultValue);

export default MagneticContext;
export { magneticContextDefaultValue };
export type { MagneticContextInitialState };
