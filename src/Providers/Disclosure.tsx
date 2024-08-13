'use client';

import { ComponentPropsWithoutRef, useMemo } from 'react';

import DisclosureContext, {
  DisclosureContextInitialState
} from '@/contexts/Disclosure';
import { useDisclosure, useId } from '@/hooks';

type DisclosureProviderOwnProps = {
  defaultIsOpen?: boolean;
};

type DisclosureProviderProps = DisclosureProviderOwnProps &
  Omit<
    ComponentPropsWithoutRef<typeof DisclosureContext.Provider>,
    keyof DisclosureProviderOwnProps | 'value'
  >;

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

export default DisclosureProvider;
export type { DisclosureProviderProps };
