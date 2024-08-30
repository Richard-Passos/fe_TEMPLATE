'use client';

import { ComponentPropsWithoutRef, useMemo } from 'react';

import BooleanContext, { BooleanContextInitialState } from '@/contexts/Boolean';
import { useBoolean, useId } from '@/hooks';

type BooleanProviderOwnProps = {
  defaultValue?: Parameters<typeof useBoolean>['0'];
};

type BooleanProviderProps = BooleanProviderOwnProps &
  Omit<
    ComponentPropsWithoutRef<typeof BooleanContext.Provider>,
    keyof BooleanProviderOwnProps | 'value'
  >;

const BooleanProvider = ({
  defaultValue = false,
  ...props
}: BooleanProviderProps) => {
  const boolean = useBoolean(defaultValue),
    id = useId();

  const value: BooleanContextInitialState = useMemo(
    () => ({
      id,
      ...boolean
    }),
    [id, boolean]
  );

  return (
    <BooleanContext.Provider
      value={value}
      {...props}
    />
  );
};

export default BooleanProvider;
export type { BooleanProviderProps };
