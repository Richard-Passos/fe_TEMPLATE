'use client';

import { createContext } from 'react';

import { useDisclosure } from '@/hooks';

type DisclosureContextInitialState = {
  id: string;
  isOpen: ReturnType<typeof useDisclosure>['0'];
  open: ReturnType<typeof useDisclosure>['1']['open'];
  close: ReturnType<typeof useDisclosure>['1']['close'];
  toggle: ReturnType<typeof useDisclosure>['1']['toggle'];
  dataState: 'open' | 'closed';
};

const disclosureContextDefaultValue: DisclosureContextInitialState = {
  id: '',
  isOpen: false,
  open: () => {},
  close: () => {},
  toggle: () => {},
  dataState: 'closed'
};

const DisclosureContext = createContext(disclosureContextDefaultValue);

export default DisclosureContext;
export { disclosureContextDefaultValue };
export type { DisclosureContextInitialState };
