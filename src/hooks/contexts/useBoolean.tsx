'use client';

import { useContext } from 'react';

import { BooleanContext } from '@/contexts';

const useBooleanContext = () => {
  const context = useContext(BooleanContext);

  if (!context)
    throw new Error(
      'useBooleanContext must be used within a BooleanContextProvider'
    );

  return context;
};

export default useBooleanContext;
