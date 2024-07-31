'use client';

import { createPolymorphicComponent } from '@mantine/core';
import { ComponentPropsWithRef, forwardRef } from 'react';

import { ButtonAtomProps } from '@/components/atoms/Button/Root';
import { useDisclosureContext } from '@/hooks/contexts';

type DrawerTriggerMoleculeOwnProps = {};

type DrawerTriggerMoleculeProps = DrawerTriggerMoleculeOwnProps &
  Omit<ComponentPropsWithRef<'button'>, keyof DrawerTriggerMoleculeOwnProps>;

const DrawerTriggerMolecule = (
  props: DrawerTriggerMoleculeProps,
  ref: DrawerTriggerMoleculeProps['ref']
) => {
  const { dataState, toggle } = useDisclosureContext();

  return (
    <button
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

export default createPolymorphicComponent<'button', ButtonAtomProps>(
  forwardRef(DrawerTriggerMolecule)
);
export type { DrawerTriggerMoleculeProps };
