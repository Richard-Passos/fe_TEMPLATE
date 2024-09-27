'use client';

import { useContext } from 'react';

import { RefContext } from '@/contexts';

const useRefContext = () => {
  const context = useContext(RefContext);

  if (!context)
    throw new Error(
      'useRefContext must be used within a RefContextProvider'
    );

  return context;
};

export default useRefContext;
