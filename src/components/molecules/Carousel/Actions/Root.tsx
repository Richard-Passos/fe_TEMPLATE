import { createPolymorphicComponent } from '@mantine/core';
import { forwardRef } from 'react';

import Box, { BoxProps } from '@/components/atoms/Box';
import { cn } from '@/utils';

type CarouselActionsMoleculeOwnProps = {};

type CarouselActionsMoleculeProps = CarouselActionsMoleculeOwnProps &
  Omit<BoxProps, keyof CarouselActionsMoleculeOwnProps>;

const CarouselActionsMolecule = (
  { className, ...props }: CarouselActionsMoleculeProps,
  ref: CarouselActionsMoleculeProps['ref']
) => {
  return (
    <Box
      className={cn('splide__arrows flex items-center gap-xs', className)}
      component='section'
      ref={ref}
      {...props}
    />
  );
};

export default createPolymorphicComponent<
  'section',
  CarouselActionsMoleculeProps
>(forwardRef(CarouselActionsMolecule));
export type { CarouselActionsMoleculeProps };
