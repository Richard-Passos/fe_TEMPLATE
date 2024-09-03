'use client';

import { forwardRef } from 'react';

import Slot, { SlotProps } from '@/components/atoms/Slot';
import { useFormContext } from '@/hooks/contexts';

type FormResetMoleculeOwnProps = {};

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
