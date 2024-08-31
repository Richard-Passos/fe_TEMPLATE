import { Card, CardProps, createPolymorphicComponent } from '@mantine/core';
import { forwardRef } from 'react';

import { PolymorphicRef } from '@/types';
import { cn } from '@/utils';

type CardMoleculeOwnProps = {
  ref?: PolymorphicRef<'div'>;
};

type CardMoleculeProps = CardMoleculeOwnProps &
  Omit<CardProps, keyof CardMoleculeOwnProps | 'Section'>;

const CardMolecule = (
  { className, ...props }: CardMoleculeProps,
  ref: CardMoleculeProps['ref']
) => {
  return (
    <Card
      className={cn(
        'size-full border dark:bg-dark-8 light:bg-white',
        className
      )}
      padding='lg'
      radius='md'
      ref={ref}
      {...props}
    />
  );
};

export default createPolymorphicComponent<'div', CardMoleculeProps>(
  forwardRef(CardMolecule)
);
export type { CardMoleculeProps };
