'use client';

import { PropsWithChildren, createContext, useMemo } from 'react';

import { useDisclosure, useId } from '@/hooks';

type DisclosureContextInitialState = {
  id: string;
  isOpen: ReturnType<typeof useDisclosure>['0'];
  open: ReturnType<typeof useDisclosure>['1']['open'];
  close: ReturnType<typeof useDisclosure>['1']['close'];
  toggle: ReturnType<typeof useDisclosure>['1']['toggle'];
  dataState: 'open' | 'closed';
};

type DisclosureProviderProps = PropsWithChildren<{
  defaultIsOpen?: boolean;
}>;

const DEFAULTS: DisclosureContextInitialState = {
  id: '',
  isOpen: false,
  open: () => {},
  close: () => {},
  toggle: () => {},
  dataState: 'closed'
};

const DisclosureContext =
  createContext<DisclosureContextInitialState>(DEFAULTS);

const DisclosureProvider = ({
  defaultIsOpen = false,
  ...props
}: DisclosureProviderProps) => {
  const [isOpen, handlers] = useDisclosure(defaultIsOpen),
    id = useId();

  const dataState: DisclosureContextInitialState['dataState'] = isOpen
    ? 'open'
    : 'closed';

  const context = useMemo(
    () => ({
      id,
      isOpen,
      dataState,
      ...handlers
    }),
    [id, isOpen, dataState, handlers]
  );

  return (
    <DisclosureContext.Provider
      value={context}
      {...props}
    />
  );
};

export default DisclosureContext;
export { DisclosureProvider };
export type { DisclosureContextInitialState, DisclosureProviderProps };
