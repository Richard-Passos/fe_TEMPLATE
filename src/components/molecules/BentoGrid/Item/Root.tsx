import { Slot, SlotProps } from '@radix-ui/react-slot';
import { forwardRef } from 'react';

import { PolymorphicRef } from '@/types';

type BentoGridItemMoleculeOwnProps = {
  index: number;
  ref?: PolymorphicRef<'li'>;
};

type BentoGridItemMoleculeProps = BentoGridItemMoleculeOwnProps &
  Omit<SlotProps, keyof BentoGridItemMoleculeOwnProps>;

const BentoGridItemMolecule = (
  { index, style, ...props }: BentoGridItemMoleculeProps,
  ref: BentoGridItemMoleculeProps['ref']
) => {
  return (
    <Slot
      ref={ref}
      style={{
        gridArea: `item-${index}`,
        ...style
      }}
      {...props}
    />
  );
};

export default forwardRef(BentoGridItemMolecule);
export type { BentoGridItemMoleculeProps };
