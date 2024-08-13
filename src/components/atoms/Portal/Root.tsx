'use client';

import { Portal, PortalProps, useComputedColorScheme } from '@mantine/core';
import { forwardRef } from 'react';

import { PolymorphicRef } from '@/types';

type PortalAtomOwnProps = {
  ref?: PolymorphicRef<'div'>;
};

type PortalAtomProps = PortalAtomOwnProps &
  Omit<PortalProps, keyof PortalAtomOwnProps>;

const PortalAtom = (props: PortalAtomProps, ref: PortalAtomProps['ref']) => {
  const theme = useComputedColorScheme();

  return (
    <Portal
      data-mantine-color-scheme={theme}
      ref={ref}
      {...props}
    />
  );
};

export default forwardRef(PortalAtom);
export type { PortalAtomProps };
