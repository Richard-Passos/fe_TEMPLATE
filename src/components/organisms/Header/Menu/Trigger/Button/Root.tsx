'use client';

import { forwardRef } from 'react';

import { Action } from '@/components/molecules';
import { ActionProps } from '@/components/molecules/Action';
import { DrawerTrigger } from '@/components/molecules/Drawer';

type HeaderMenuTriggerButtonOrganismOwnProps = {};

type HeaderMenuTriggerButtonOrganismProps =
  HeaderMenuTriggerButtonOrganismOwnProps &
    Omit<ActionProps, keyof HeaderMenuTriggerButtonOrganismOwnProps>;

const HeaderMenuTriggerButtonOrganism = (
  props: HeaderMenuTriggerButtonOrganismProps,
  ref: HeaderMenuTriggerButtonOrganismProps['ref']
) => {
  return (
    <DrawerTrigger
      component={Action}
      ref={ref}
      {...props}
    />
  );
};

export default forwardRef(HeaderMenuTriggerButtonOrganism);
export type { HeaderMenuTriggerButtonOrganismProps };
