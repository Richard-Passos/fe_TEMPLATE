'use client';

// @ts-ignore
import { SplideTrack } from '@splidejs/react-splide';
import { ComponentPropsWithRef, forwardRef } from 'react';

import { cn } from '@/utils';

type CarouselTrackMoleculeOwnProps = {};

type CarouselTrackMoleculeProps = CarouselTrackMoleculeOwnProps &
  Omit<
    ComponentPropsWithRef<typeof SplideTrack>,
    keyof CarouselTrackMoleculeOwnProps
  >;

const CarouselTrackMolecule = (
  { className, ...props }: CarouselTrackMoleculeProps,
  ref: CarouselTrackMoleculeProps['ref']
) => {
  return (
    <SplideTrack
      className={cn(
        `
          w-full cursor-grab !overflow-x-clip !overflow-y-visible

          active:cursor-grabbing
        `,
        className
      )}
      ref={ref}
      {...props}
    />
  );
};

export default forwardRef(CarouselTrackMolecule);
export type { CarouselTrackMoleculeProps };
