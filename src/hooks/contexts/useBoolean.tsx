'use client';

import { useContext } from 'react';

import { BooleanContext } from '@/contexts';

const useBooleanContext = () => {
  const context = useContext(BooleanContext);

  return context;
};

export default useBooleanContext;
