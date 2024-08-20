'use client';

import { Slot, SlotProps } from '@radix-ui/react-slot';
import { forwardRef, useRef } from 'react';

import { MagneticProvider } from '@/Providers';
import { PolymorphicRef } from '@/types';
import { setRefs } from '@/utils';

type MagneticContainerAtomOwnProps = {
  ref?: PolymorphicRef<any>;
};

type MagneticContainerAtomProps = MagneticContainerAtomOwnProps &
  Omit<SlotProps, keyof MagneticContainerAtomOwnProps>;

const MagneticContainerAtom = (
  props: MagneticContainerAtomProps,
  ref: MagneticContainerAtomProps['ref']
) => {
  const innerRef = useRef<HTMLElement>(null);

  return (
    <MagneticProvider container={innerRef}>
      <Slot
        ref={setRefs(ref, innerRef)}
        {...props}
      />
    </MagneticProvider>
  );
};

export default forwardRef(MagneticContainerAtom);
export type { MagneticContainerAtomProps };
