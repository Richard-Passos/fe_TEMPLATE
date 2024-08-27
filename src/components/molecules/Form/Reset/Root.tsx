'use client';

import { Slot, SlotProps } from '@radix-ui/react-slot';
import { forwardRef } from 'react';

import { useFormContext } from '@/hooks/contexts';
import { PolymorphicRef } from '@/types';

type FormResetMoleculeOwnProps = {
  ref?: PolymorphicRef<'div'>;
};

type FormResetMoleculeProps = FormResetMoleculeOwnProps &
  Omit<SlotProps, keyof FormResetMoleculeOwnProps>;

const FormResetMolecule = (
  props: FormResetMoleculeProps,
  ref: FormResetMoleculeProps['ref']
) => {
  props = {
    ...props,
    type: 'reset'
  } as typeof props;

  const { reset } = useFormContext();

  return (
    <Slot
      onClick={() => reset()}
      ref={ref}
      {...props}
    />
  );
};

export default forwardRef(FormResetMolecule);
export type { FormResetMoleculeProps };
