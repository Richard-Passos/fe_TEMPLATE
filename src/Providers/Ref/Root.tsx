'use client';

import { ReactNode, useRef } from 'react';

import RefContext from '@/contexts/Ref';

type RefProviderProps = {
  children: ReactNode;
};

const RefProvider = (props: RefProviderProps) => {
  const ref = useRef(null);

  return (
    <RefContext.Provider
      value={ref}
      {...props}
    />
  );
};

export default RefProvider;
export type { RefProviderProps };
