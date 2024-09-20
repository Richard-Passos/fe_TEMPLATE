'use client';

import { createContext } from 'react';

type CarouselContextInitialState = {
  id: string;
  state: {
    activeIdx: number;
    progress: number;
  };
  setState: ({
    // eslint-disable-next-line no-unused-vars
    activeIdx,
    // eslint-disable-next-line no-unused-vars
    progress
  }: {
    activeIdx: number;
    progress: number;
  }) => void;
};

const carouselContextDefaultValue: CarouselContextInitialState = {
  id: '',
  state: {
    activeIdx: 0,
    progress: 0
  },
  setState: () => {}
};

const CarouselContext = createContext(carouselContextDefaultValue);

export default CarouselContext;
export { carouselContextDefaultValue };
export type { CarouselContextInitialState };
