'use client';

import { Portal, PortalProps, useComputedColorScheme } from '@mantine/core';
import { Slot } from '@radix-ui/react-slot';
import { forwardRef } from 'react';

import { PolymorphicRef } from '@/types';

type PortalAtomOwnProps = {
  ref?: PolymorphicRef<'div'>;
};

type PortalAtomProps = PortalAtomOwnProps &
  Omit<PortalProps, keyof PortalAtomOwnProps>;

const PortalAtom = (
  { children, ...props }: PortalAtomProps,
  ref: PortalAtomProps['ref']
) => {
  const theme = useComputedColorScheme();

  return (
    <Portal
      ref={ref}
      {...props}
    >
      <Slot data-theme={theme}>{children}</Slot>
    </Portal>
  );
};

export default forwardRef(PortalAtom);
export type { PortalAtomProps };
