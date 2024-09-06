import { forwardRef } from 'react';

import Slot, { SlotProps } from '@/components/atoms/Slot';
import { cn } from '@/utils';

const ACTIONS = {
  next: 'splide__arrow--next',
  prev: 'splide__arrow--prev'
};

type CarouselActionMoleculeOwnProps = {
  action: keyof typeof ACTIONS;
};

type CarouselActionMoleculeProps = CarouselActionMoleculeOwnProps &
  Omit<SlotProps, keyof CarouselActionMoleculeOwnProps>;

const CarouselActionMolecule = (
  { action, className, ...props }: CarouselActionMoleculeProps,
  ref: CarouselActionMoleculeProps['ref']
) => {
  return (
    <Slot
      className={cn('splide__arrow', ACTIONS[action], className)}
      ref={ref}
      {...props}
    />
  );
};

export default forwardRef(CarouselActionMolecule);
export type { CarouselActionMoleculeProps };
