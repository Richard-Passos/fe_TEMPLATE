'use client';

import { forwardRef } from 'react';

import { Action } from '@/components/molecules';
import { ActionProps } from '@/components/molecules/Action';
import {
  DrawerTrigger,
  DrawerTriggerProps
} from '@/components/molecules/Drawer';

type HeaderMenuTriggerButtonOrganismOwnProps = {};

type HeaderMenuTriggerButtonOrganismProps =
  HeaderMenuTriggerButtonOrganismOwnProps &
    Omit<
      ActionProps & DrawerTriggerProps,
      keyof HeaderMenuTriggerButtonOrganismOwnProps
    >;

const HeaderMenuTriggerButtonOrganism = (
  props: HeaderMenuTriggerButtonOrganismProps,
  ref: HeaderMenuTriggerButtonOrganismProps['ref']
) => {
  return (
    <Action
      component={DrawerTrigger}
      ref={ref}
      {...props}
    />
  );
};

export default forwardRef(HeaderMenuTriggerButtonOrganism);
export type { HeaderMenuTriggerButtonOrganismProps };
