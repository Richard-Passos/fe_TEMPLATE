'use client';

// @ts-ignore
import { SplideSlide } from '@splidejs/react-splide';
import { ComponentPropsWithRef } from 'react';

type CarouselItemMoleculeOwnProps = {};

type CarouselItemMoleculeProps = CarouselItemMoleculeOwnProps &
  Omit<
    ComponentPropsWithRef<typeof SplideSlide>,
    keyof CarouselItemMoleculeOwnProps
  >;

const CarouselItemMolecule = SplideSlide;

export default CarouselItemMolecule;
export type { CarouselItemMoleculeProps };
