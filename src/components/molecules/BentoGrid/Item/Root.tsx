import { createPolymorphicComponent } from '@mantine/core';
import { forwardRef } from 'react';

import { Box } from '@/components/atoms';
import { BoxProps } from '@/components/atoms/Box';
import { PolymorphicRef } from '@/types';

type BentoGridItemMoleculeOwnProps = {
  index: number;
  ref?: PolymorphicRef<'li'> & BoxProps['ref'];
};

type BentoGridItemMoleculeProps = BentoGridItemMoleculeOwnProps &
  Omit<BoxProps, keyof BentoGridItemMoleculeOwnProps>;

const BentoGridItemMolecule = (
  { index, style, ...props }: BentoGridItemMoleculeProps,
  ref: BentoGridItemMoleculeProps['ref']
) => {
  return (
    <Box
      component='li'
      ref={ref}
      style={{
        gridArea: `item-${index}`,
        ...style
      }}
      {...props}
    />
  );
};

export default createPolymorphicComponent<'li', BentoGridItemMoleculeProps>(
  forwardRef(BentoGridItemMolecule)
);
export type { BentoGridItemMoleculeProps };
