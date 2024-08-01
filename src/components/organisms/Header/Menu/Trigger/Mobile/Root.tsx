'use client';

import { forwardRef } from 'react';

import { Button } from '@/components/atoms';
import { ButtonProps } from '@/components/atoms/Button';
import {
  DrawerTrigger,
  DrawerTriggerProps
} from '@/components/molecules/Drawer';

type HeaderMenuTriggerMobileOrganismOwnProps = {};

type HeaderMenuTriggerMobileOrganismProps =
  HeaderMenuTriggerMobileOrganismOwnProps &
    Omit<
      DrawerTriggerProps & ButtonProps,
      keyof HeaderMenuTriggerMobileOrganismOwnProps
    >;

const HeaderMenuTriggerMobileOrganism = (
  props: HeaderMenuTriggerMobileOrganismProps,
  ref: HeaderMenuTriggerMobileOrganismProps['ref']
) => {
  return (
    <Button
      component={DrawerTrigger}
      ref={ref}
      variant='default'
      {...props}
    />
  );
};

export default forwardRef(HeaderMenuTriggerMobileOrganism);
export type { HeaderMenuTriggerMobileOrganismProps };
