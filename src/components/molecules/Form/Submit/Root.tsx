'use client';

import { forwardRef } from 'react';

import Slot, { SlotProps } from '@/components/atoms/Slot';
import { useFormContext } from '@/hooks/contexts';

type FormSubmitMoleculeOwnProps = {
  shouldHandleLoading?: boolean;
};

type FormSubmitMoleculeProps = FormSubmitMoleculeOwnProps &
  Omit<SlotProps, keyof FormSubmitMoleculeOwnProps>;

const FormSubmitMolecule = (
  { shouldHandleLoading = true, ...props }: FormSubmitMoleculeProps,
  ref: FormSubmitMoleculeProps['ref']
) => {
  const {
    formState: { isSubmitting }
  } = useFormContext();

  props = {
    ...props,
    type: 'submit',
    isLoading: shouldHandleLoading && isSubmitting
  } as typeof props;

  return (
    <Slot
      ref={ref}
      {...props}
    />
  );
};

export default forwardRef(FormSubmitMolecule);
export type { FormSubmitMoleculeProps };
