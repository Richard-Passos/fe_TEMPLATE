'use client';

import { DrawerRoot, DrawerRootProps } from '@mantine/core';
import { PropsWithChildren, ReactNode, forwardRef } from 'react';

import {
  DisclosureContextInitialState,
  DisclosureProvider
} from '@/contexts/Disclosure';
import { useUpdateEffect } from '@/hooks';
import { useDisclosureContext } from '@/hooks/contexts';
import { usePathname } from '@/navigation';

type DrawerMoleculeOwnProps = Partial<
  Pick<DrawerRootProps, 'onClose' | 'opened'>
> & {
  ref?: PolymorphicRef<'div'>;
};

type DrawerMoleculeProps = DrawerMoleculeOwnProps &
  Omit<DrawerRootProps, keyof DrawerMoleculeOwnProps>;

const MoleculesDrawer = forwardRef(
  (props: DrawerMoleculeProps, ref: DrawerMoleculeProps['ref']) => {
    const { isOpen, close, dataState } = useDisclosureContext(),
      pathname = usePathname();

    useUpdateEffect(close, [close, pathname]);

    return (
      <DrawerRoot
        data-state={dataState}
        onClose={close}
        opened={isOpen}
        ref={ref}
        {...props}
      />
    );
  }
);
MoleculesDrawer.displayName = 'MoleculesDrawer';

type DrawerWithProviderMoleculeOwnProps = PropsWithChildren<{
  defaultIsOpen?: DisclosureContextInitialState['isOpen'];
  trigger: ReactNode;
}>;

type DrawerWithProviderMoleculeProps = DrawerWithProviderMoleculeOwnProps &
  DrawerMoleculeProps;

const DrawerWithProviderMolecule = (
  { defaultIsOpen, trigger, ...props }: DrawerWithProviderMoleculeProps,
  ref: DrawerWithProviderMoleculeProps['ref']
) => {
  return (
    <DisclosureProvider defaultIsOpen={defaultIsOpen}>
      <MoleculesDrawer
        ref={ref}
        {...props}
      />

      {trigger}
    </DisclosureProvider>
  );
};

export default forwardRef(DrawerWithProviderMolecule);
export type { DrawerMoleculeProps, DrawerWithProviderMoleculeProps };
