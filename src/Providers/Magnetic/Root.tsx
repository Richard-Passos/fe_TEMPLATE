'use client';

import { ComponentPropsWithoutRef, useMemo } from 'react';

import MagneticContext, {
  MagneticContextInitialState
} from '@/contexts/Magnetic';
import { useId } from '@/hooks';

type MagneticProviderOwnProps = Pick<MagneticContextInitialState, 'container'>;

type MagneticProviderProps = MagneticProviderOwnProps &
  Omit<
    ComponentPropsWithoutRef<typeof MagneticContext.Provider>,
    keyof MagneticProviderOwnProps | 'value'
  >;

const MagneticProvider = ({ container, ...props }: MagneticProviderProps) => {
  const id = useId();

  const value: MagneticContextInitialState = useMemo(
    () => ({
      id,
      container
    }),
    [id, container]
  );

  return (
    <MagneticContext.Provider
      value={value}
      {...props}
    />
  );
};

export default MagneticProvider;
export type { MagneticProviderProps };
