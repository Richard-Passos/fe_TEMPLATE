'use client';

import { DrawerRoot, DrawerRootProps } from '@mantine/core';
import { ReactNode, forwardRef } from 'react';

import BooleanProvider, { BooleanProviderProps } from '@/Providers/Boolean';
import { useUpdateEffect } from '@/hooks';
import { useBooleanContext } from '@/hooks/contexts';
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
    const { value, setFalse } = useBooleanContext(),
      pathname = usePathname();

    const dataState = value ? 'open' : 'closed';

    useUpdateEffect(close, [close, pathname]);

    return (
      <DrawerRoot
        data-state={dataState}
        onClose={setFalse}
        opened={value}
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
    BooleanProviderProps & DrawerMoleculeProps,
    keyof DrawerMoleculeOwnProps
  >;

const DrawerWithProviderMolecule = (
  { defaultValue, trigger, ...props }: DrawerWithProviderMoleculeProps,
  ref: DrawerWithProviderMoleculeProps['ref']
) => {
  return (
    <BooleanProvider defaultValue={defaultValue}>
      <DrawerMolecule
        ref={ref}
        {...props}
      />

      {trigger}
    </BooleanProvider>
  );
};

export default forwardRef(DrawerWithProviderMolecule);
export type { DrawerMoleculeProps, DrawerWithProviderMoleculeProps };
