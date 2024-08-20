'use client';

import { forwardRef } from 'react';

import Progress, { ProgressProps } from '@/components/atoms/Progress';
import { useCarouselContext } from '@/hooks/contexts';

type CarouselProgressMoleculeOwnProps = Pick<Partial<ProgressProps>, 'value'>;

type CarouselProgressMoleculeProps = CarouselProgressMoleculeOwnProps &
  Omit<ProgressProps, keyof CarouselProgressMoleculeOwnProps>;

const CarouselProgressMolecule = (
  props: CarouselProgressMoleculeProps,
  ref: CarouselProgressMoleculeProps['ref']
) => {
  const { state } = useCarouselContext();

  return (
    <Progress
      ref={ref}
      size='xs'
      value={state.progress * 100}
      {...props}
    />
  );
};

export default forwardRef(CarouselProgressMolecule);
export type { CarouselProgressMoleculeProps };
