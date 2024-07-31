'use client';

import { useContext } from 'react';

import { DisclosureContext } from '@/contexts';

const useDisclosureContext = () => {
  const context = useContext(DisclosureContext);

  return context;
};

export default useDisclosureContext;
