'use client';

import { forwardRef } from 'react';

import Slot, { SlotProps } from '@/components/atoms/Slot';
import { useBooleanContext } from '@/hooks/contexts';

type DrawerTriggerMoleculeOwnProps = {};

type DrawerTriggerMoleculeProps = DrawerTriggerMoleculeOwnProps &
  Omit<SlotProps, keyof DrawerTriggerMoleculeOwnProps>;

const DrawerTriggerMolecule = (
  props: DrawerTriggerMoleculeProps,
  ref: DrawerTriggerMoleculeProps['ref']
) => {
  const { value, toggle } = useBooleanContext();

  const dataState = value ? 'open' : 'closed';

  return (
    <Slot
      data-state={dataState}
      ref={ref}
      {...props}
      onClick={(ev) => {
        toggle();

        props.onClick?.(ev);
      }}
    />
  );
};

export default forwardRef(DrawerTriggerMolecule);
export type { DrawerTriggerMoleculeProps };
