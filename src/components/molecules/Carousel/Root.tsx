'use client';

// @ts-ignore
import { Options, Splide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css/core';
import { ComponentPropsWithRef, forwardRef } from 'react';

import CarouselProvider, { CarouselProviderProps } from '@/Providers/Carousel';
import { useCarouselContext } from '@/hooks/contexts';
import { cn } from '@/utils';

type CarouselMoleculeOwnProps = {
  options?: Options;
};

type CarouselMoleculeProps = CarouselMoleculeOwnProps &
  Omit<ComponentPropsWithRef<typeof Splide>, keyof CarouselMoleculeOwnProps>;

const CarouselMolecule = forwardRef(
  (
    { options, className, ...props }: CarouselMoleculeProps,
    ref: CarouselMoleculeProps['ref']
  ) => {
    const { setState } = useCarouselContext();

    options = {
      autoWidth: true,
      autoHeight: true,
      focus: 'center',
      trimSpace: false,
      pagination: false,
      gap: 'var(--mantine-spacing-xs)',
      ...options
    };

    return (
      <Splide
        className={cn('flex w-full flex-col items-center', className)}
        hasTrack={false}
        onMove={(carousel) => {
          const end = carousel.length - 1,
            rate = Math.min(carousel.index / end, 1);

          setState({
            activeIdx: carousel.index,
            progress: rate
          });
        }}
        options={options}
        ref={ref}
        tag='section'
        {...props}
      />
    );
  }
);
CarouselMolecule.displayName = 'CarouselMolecule';

type CarouselMoleculeWithProviderOwnProps = {};

type CarouselMoleculeWithProviderProps = CarouselMoleculeWithProviderOwnProps &
  Omit<
    CarouselProviderProps & CarouselMoleculeProps,
    keyof CarouselMoleculeWithProviderOwnProps
  >;

const CarouselMoleculeWithProvider = (
  props: CarouselMoleculeWithProviderProps,
  ref: CarouselMoleculeWithProviderProps['ref']
) => {
  return (
    <CarouselProvider>
      <CarouselMolecule
        ref={ref}
        {...props}
      />
    </CarouselProvider>
  );
};

export default forwardRef(CarouselMoleculeWithProvider);
export type { CarouselMoleculeProps };
