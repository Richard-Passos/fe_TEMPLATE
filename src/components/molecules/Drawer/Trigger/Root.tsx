'use client';

import { forwardRef } from 'react';

import Button, { ButtonProps } from '@/components/atoms/Button';
import { useDisclosureContext } from '@/hooks/contexts';

type DrawerTriggerMoleculeOwnProps = {};

type DrawerTriggerMoleculeProps = DrawerTriggerMoleculeOwnProps &
  Omit<ButtonProps, keyof DrawerTriggerMoleculeOwnProps>;

const DrawerTriggerMolecule = (
  props: DrawerTriggerMoleculeProps,
  ref: DrawerTriggerMoleculeProps['ref']
) => {
  const { dataState, toggle } = useDisclosureContext();

  return (
    <Button
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
