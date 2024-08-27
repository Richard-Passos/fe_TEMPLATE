import { Slot, SlotProps } from '@radix-ui/react-slot';
import { forwardRef } from 'react';

import { PolymorphicRef } from '@/types';

type FormSubmitMoleculeOwnProps = {
  ref?: PolymorphicRef<'div'>;
};

type FormddSubmitMoleculeProps = FormSubmitMoleculeOwnProps &
  Omit<SlotProps, keyof FormSubmitMoleculeOwnProps>;

const FormddSubmitMolecule = (
  props: FormddSubmitMoleculeProps,
  ref: FormddSubmitMoleculeProps['ref']
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

export default forwardRef(FormddSubmitMolecule);
export type { FormddSubmitMoleculeProps };
