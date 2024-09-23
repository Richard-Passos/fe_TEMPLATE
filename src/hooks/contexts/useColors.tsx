'use client';

import { useContext } from 'react';

import { ColorsContext } from '@/contexts';

const useColorsContext = () => {
  const context = useContext(ColorsContext);

  if (!context)
    throw new Error(
      'useColorsContext must be used within a ColorsContextProvider'
    );

  return context;
};

export default useColorsContext;
