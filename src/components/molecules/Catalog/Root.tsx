import { Slot } from '@radix-ui/react-slot';
import { ComponentPropsWithRef, forwardRef } from 'react';

import CatalogProvider, { CatalogProviderProps } from '@/Providers/Catalog';
import { AsChildProps } from '@/components/atoms/Slot';

type CatalogMoleculeOwnProps = {};

type CatalogMoleculeProps = AsChildProps<
  CatalogMoleculeOwnProps &
    Omit<ComponentPropsWithRef<'section'>, keyof CatalogMoleculeOwnProps>
>;

const CatalogMolecule = forwardRef(
  (
    { asChild, ...props }: CatalogMoleculeProps,
    ref: CatalogMoleculeProps['ref']
  ) => {
    if (asChild)
      return (
        <Slot
          ref={ref}
          {...props}
        />
      );

    return (
      <section
        ref={ref}
        {...(props as ComponentPropsWithRef<'section'>)}
      />
    );
  }
);
CatalogMolecule.displayName = 'CatalogMolecule';

type CatalogMoleculeWithProviderProps<T> = CatalogProviderProps<T> &
  CatalogMoleculeProps;

const CatalogMoleculeWithProvider = <T,>(
  { items, url, ...props }: CatalogMoleculeWithProviderProps<T>,
  ref: CatalogMoleculeWithProviderProps<T>['ref']
) => {
  return (
    <CatalogProvider
      items={items}
      url={url}
    >
      <CatalogMolecule
        ref={ref}
        {...props}
      />
    </CatalogProvider>
  );
};

export default forwardRef(CatalogMoleculeWithProvider);
export type { CatalogMoleculeProps, CatalogMoleculeWithProvider };
