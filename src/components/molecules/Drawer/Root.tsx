'use client';

import { DrawerRoot, DrawerRootProps } from '@mantine/core';
import { ReactNode, forwardRef } from 'react';

import DisclosureProvider, {
  DisclosureProviderProps
} from '@/Providers/Disclosure';
import { useUpdateEffect } from '@/hooks';
import { useDisclosureContext } from '@/hooks/contexts';
import { usePathname } from '@/navigation';
import { PolymorphicRef } from '@/types';

type DrawerMoleculeOwnProps = Partial<
  Pick<DrawerRootProps, 'onClose' | 'opened'>
> & {
  ref?: PolymorphicRef<'div'>;
};

type DrawerMoleculeProps = DrawerMoleculeOwnProps &
  Omit<DrawerRootProps, keyof DrawerMoleculeOwnProps>;

const DrawerMolecule = forwardRef(
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
DrawerMolecule.displayName = 'DrawerMolecule';

type DrawerWithProviderMoleculeOwnProps = {
  trigger: ReactNode;
  ref?: DrawerMoleculeProps['ref'];
};

type DrawerWithProviderMoleculeProps = DrawerWithProviderMoleculeOwnProps &
  Omit<
    DisclosureProviderProps & DrawerMoleculeProps,
    keyof DrawerMoleculeOwnProps
  >;

const DrawerWithProviderMolecule = (
  { defaultIsOpen, trigger, ...props }: DrawerWithProviderMoleculeProps,
  ref: DrawerWithProviderMoleculeProps['ref']
) => {
  return (
    <DisclosureProvider defaultIsOpen={defaultIsOpen}>
      <DrawerMolecule
        ref={ref}
        {...props}
      />

      {trigger}
    </DisclosureProvider>
  );
};

export default forwardRef(DrawerWithProviderMolecule);
export type { DrawerMoleculeProps, DrawerWithProviderMoleculeProps };
