'use client';

import { OptionalPortal, OptionalPortalProps } from '@mantine/core';
import { Slot } from '@radix-ui/react-slot';
import { forwardRef } from 'react';

import { useThemeContext } from '@/hooks/contexts';
import { PolymorphicRef } from '@/types';

type PortalAtomOwnProps = {
  ref?: PolymorphicRef<'div'>;
};

type PortalAtomProps = PortalAtomOwnProps &
  Omit<OptionalPortalProps, keyof PortalAtomOwnProps>;

const PortalAtom = (
  { withinPortal = true, children, ...props }: PortalAtomProps,
  ref: PortalAtomProps['ref']
) => {
  const { theme } = useThemeContext();

  return (
    <OptionalPortal
      ref={ref}
      withinPortal={withinPortal}
      {...props}
    >
      <Slot data-theme={theme}>{children}</Slot>
    </OptionalPortal>
  );
};

export default forwardRef(PortalAtom);
export type { PortalAtomProps };
