'use client';

import { ReactNode, useMemo } from 'react';

import BooleanContext, { BooleanContextInitialState } from '@/contexts/Boolean';
import { useBoolean } from '@/hooks';

type BooleanProviderProps = {
  defaultValue?: Parameters<typeof useBoolean>['0'];
  children: ReactNode;
};

const BooleanProvider = ({
  defaultValue = false,
  ...props
}: BooleanProviderProps) => {
  const boolean = useBoolean(defaultValue);

  const value: BooleanContextInitialState = useMemo(() => boolean, [boolean]);

  return (
    <BooleanContext.Provider
      value={value}
      {...props}
    />
  );
};

export default BooleanProvider;
export type { BooleanProviderProps };
