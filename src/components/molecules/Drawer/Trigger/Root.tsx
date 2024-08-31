'use client';

import { forwardRef } from 'react';

import Button, { ButtonProps } from '@/components/atoms/Button';
import { useBooleanContext } from '@/hooks/contexts';

type DrawerTriggerMoleculeOwnProps = {};

type DrawerTriggerMoleculeProps = DrawerTriggerMoleculeOwnProps &
  Omit<ButtonProps, keyof DrawerTriggerMoleculeOwnProps>;

const DrawerTriggerMolecule = (
  props: DrawerTriggerMoleculeProps,
  ref: DrawerTriggerMoleculeProps['ref']
) => {
  const { value, toggle } = useBooleanContext();

  const dataState = value ? 'open' : 'closed';

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
