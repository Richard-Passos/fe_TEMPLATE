import { Card, CardProps, createPolymorphicComponent } from '@mantine/core';
import { forwardRef } from 'react';

import { PolymorphicRef } from '@/types';
import { cn } from '@/utils';

type CardMoleculeOwnProps = {
  ref?: PolymorphicRef<'li'>;
};

type CardMoleculeProps = CardMoleculeOwnProps &
  Omit<CardProps, keyof CardMoleculeOwnProps | 'Section'>;

const CardMolecule = (
  { className, ...props }: CardMoleculeProps,
  ref: CardMoleculeProps['ref']
) => {
  return (
    <Card
      className={cn('rounded-md p-lg', className)}
      component='li'
      ref={ref}
      withBorder
      {...props}
    />
  );
};

export default createPolymorphicComponent<'li', CardMoleculeProps>(
  forwardRef(CardMolecule)
);
export type { CardMoleculeProps };
