import { createPolymorphicComponent } from '@mantine/core';
import { forwardRef } from 'react';

import Button, { ButtonProps } from '@/components/atoms/Button';
import { cn } from '@/utils';

const ACTIONS = {
  next: 'splide__arrow--next',
  prev: 'splide__arrow--prev'
};

type CarouselActionMoleculeOwnProps = {
  action: keyof typeof ACTIONS;
};

type CarouselActionMoleculeProps = CarouselActionMoleculeOwnProps &
  Omit<ButtonProps, keyof CarouselActionMoleculeOwnProps>;

const CarouselActionMolecule = (
  { action, className, ...props }: CarouselActionMoleculeProps,
  ref: CarouselActionMoleculeProps['ref']
) => {
  return (
    <Button
      className={cn('splide__arrow', ACTIONS[action], className)}
      ref={ref}
      {...props}
    />
  );
};

export default createPolymorphicComponent<
  'button',
  CarouselActionMoleculeProps
>(forwardRef(CarouselActionMolecule));
export type { CarouselActionMoleculeProps };
