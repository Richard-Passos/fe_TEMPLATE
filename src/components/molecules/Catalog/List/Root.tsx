'use client';

import { ComponentPropsWithRef, forwardRef } from 'react';

import Slot, { AsChildProps } from '@/components/atoms/Slot';
import { useCatalogContext } from '@/hooks/contexts';
import { PolymorphicRef } from '@/types';
import { cn } from '@/utils';

type CatalogListMoleculeOwnProps = {};

type CatalogListMoleculeProps = AsChildProps<
  CatalogListMoleculeOwnProps &
    Omit<ComponentPropsWithRef<'ul'>, keyof CatalogListMoleculeOwnProps>
>;

const CatalogListMolecule = (
  { asChild, className, ...props }: CatalogListMoleculeProps,
  ref: CatalogListMoleculeProps['ref']
) => {
  const { items } = useCatalogContext();

  if (!items.length) return null;

  if (asChild)
    return (
      <Slot
        className={className}
        ref={ref}
        {...props}
      />
    );

  return (
    <ul
      className={cn('m-0 list-none p-0', className)}
      ref={ref as PolymorphicRef<'ul'>}
      {...(props as ComponentPropsWithRef<'ul'>)}
    />
  );
};

export default forwardRef(CatalogListMolecule);
export type { CatalogListMoleculeProps };
