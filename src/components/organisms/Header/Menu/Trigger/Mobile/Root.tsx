import { forwardRef } from 'react';

import { Button } from '@/components/atoms';
import { ButtonProps } from '@/components/atoms/Button';
import { DrawerTrigger } from '@/components/molecules/Drawer';

type HeaderMenuTriggerMobileOrganismOwnProps = {};

type HeaderMenuTriggerMobileOrganismProps =
  HeaderMenuTriggerMobileOrganismOwnProps &
    Omit<ButtonProps, keyof HeaderMenuTriggerMobileOrganismOwnProps>;

const HeaderMenuTriggerMobileOrganism = (
  props: HeaderMenuTriggerMobileOrganismProps,
  ref: HeaderMenuTriggerMobileOrganismProps['ref']
) => {
  return (
    <DrawerTrigger>
      <Button
        ref={ref}
        variant='default'
        {...props}
      />
    </DrawerTrigger>
  );
};

export default forwardRef(HeaderMenuTriggerMobileOrganism);
export type { HeaderMenuTriggerMobileOrganismProps };
