'use client';

import { DrawerRoot, DrawerRootProps } from '@mantine/core';
import { ReactNode, forwardRef } from 'react';

import BooleanProvider, { BooleanProviderProps } from '@/Providers/Boolean';
import { Portal } from '@/components/atoms';
import { PortalProps } from '@/components/atoms/Portal';
import { useUpdateEffect } from '@/hooks';
import { useBooleanContext } from '@/hooks/contexts';
import { usePathname } from '@/navigation';
import { PolymorphicRef } from '@/types';

type DrawerMoleculeOwnProps = Partial<
  Pick<DrawerRootProps, 'onClose' | 'opened'>
> & {
  ref?: PolymorphicRef<'div'>;
  portalProps?: Partial<PortalProps>;
};

type DrawerMoleculeProps = DrawerMoleculeOwnProps &
  Omit<DrawerRootProps, keyof DrawerMoleculeOwnProps>;

const DrawerMolecule = forwardRef(
  (
    { portalProps, withinPortal, ...props }: DrawerMoleculeProps,
    ref: DrawerMoleculeProps['ref']
  ) => {
    const { value, setFalse } = useBooleanContext(),
      pathname = usePathname();

    const dataState = value ? 'open' : 'closed';

    useUpdateEffect(setFalse, [setFalse, pathname]);

    const content = (
      <DrawerRoot
        data-state={dataState}
        onClose={setFalse}
        opened={value}
        ref={ref}
        withinPortal={false}
        {...props}
      />
    );

    if (!withinPortal) content;

    return <Portal {...portalProps}>{content}</Portal>;
  }
);
DrawerMolecule.displayName = 'DrawerMolecule';

type DrawerWithProviderMoleculeOwnProps = {
  trigger: ReactNode;
  ref?: DrawerMoleculeProps['ref'];
};

type DrawerWithProviderMoleculeProps = DrawerWithProviderMoleculeOwnProps &
  Omit<
    BooleanProviderProps & DrawerMoleculeProps,
    keyof DrawerMoleculeOwnProps
  >;

const DrawerWithProviderMolecule = (
  { defaultValue, trigger, ...props }: DrawerWithProviderMoleculeProps,
  ref: DrawerWithProviderMoleculeProps['ref']
) => {
  return (
    <BooleanProvider defaultValue={defaultValue}>
      {trigger}

      <DrawerMolecule
        ref={ref}
        {...props}
      />
    </BooleanProvider>
  );
};

export default forwardRef(DrawerWithProviderMolecule);
export type { DrawerMoleculeProps, DrawerWithProviderMoleculeProps };
