'use client';

import { useContext } from 'react';

import MagneticContext, {
  MagneticContextInitialState
} from '@/contexts/Magnetic';

const useMagnetic = () => {
  const context = useContext<MagneticContextInitialState>(MagneticContext);

  return context;
};

export default useMagnetic;
