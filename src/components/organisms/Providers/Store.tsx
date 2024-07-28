'use client';

import { Provider, ProviderProps } from 'react-redux';
import { PersistGate, PersistGateProps } from 'redux-persist/integration/react';

import store, { persistor } from '@/store';

type StoreProviderOrganismOwnProps = {
  persistGateProps?: Partial<PersistGateProps>;
};

type StoreProviderOrganismProps = StoreProviderOrganismOwnProps &
  Omit<Partial<ProviderProps>, keyof StoreProviderOrganismOwnProps>;

const StoreProviderOrganism = ({
  children,
  persistGateProps,
  ...props
}: StoreProviderOrganismProps) => {
  return (
    <Provider
      store={store}
      {...props}
    >
      <PersistGate
        loading={null}
        persistor={persistor}
        {...persistGateProps}
      >
        {children}
      </PersistGate>
    </Provider>
  );
};

export default StoreProviderOrganism;
export type { StoreProviderOrganismProps };
