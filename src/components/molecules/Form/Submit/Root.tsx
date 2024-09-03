import { forwardRef } from 'react';

import Slot, { SlotProps } from '@/components/atoms/Slot';

type FormSubmitMoleculeOwnProps = {};

type FormSubmitMoleculeProps = FormSubmitMoleculeOwnProps &
  Omit<SlotProps, keyof FormSubmitMoleculeOwnProps>;

const FormSubmitMolecule = (
  props: FormSubmitMoleculeProps,
  ref: FormSubmitMoleculeProps['ref']
) => {
  props = {
    ...props,
    type: 'submit'
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
