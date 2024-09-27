'use client';

import { RefObject, createContext } from 'react';

type RefContextInitialState = RefObject<HTMLDivElement>;

const RefContext = createContext<RefContextInitialState | undefined>(undefined);

export default RefContext;
export type { RefContextInitialState };
