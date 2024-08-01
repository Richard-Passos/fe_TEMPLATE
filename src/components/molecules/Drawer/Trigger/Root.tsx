'use client';

import { createPolymorphicComponent } from '@mantine/core';
import { ComponentPropsWithRef, forwardRef } from 'react';

import { Box } from '@/components/atoms';
import { BoxProps } from '@/components/atoms/Box';
import { ButtonAtomProps } from '@/components/atoms/Button/Root';
import { useDisclosureContext } from '@/hooks/contexts';

type DrawerTriggerMoleculeOwnProps = ComponentPropsWithRef<'button'>;

type DrawerTriggerMoleculeProps = DrawerTriggerMoleculeOwnProps &
  Omit<BoxProps, keyof DrawerTriggerMoleculeOwnProps>;

const DrawerTriggerMolecule = (
  props: DrawerTriggerMoleculeProps,
  ref: DrawerTriggerMoleculeProps['ref']
) => {
  const { dataState, toggle } = useDisclosureContext();

  return (
    <Box
      component='button'
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
