'use client';

import { useContext } from 'react';

import CarouselContext, {
  CarouselContextInitialState
} from '@/contexts/Carousel';

const useCarousel = () => {
  const context = useContext<CarouselContextInitialState>(CarouselContext);

  return context;
};

export default useCarousel;
