import { Slot, SlotProps } from '@radix-ui/react-slot';
import { forwardRef } from 'react';

import { PolymorphicRef } from '@/types';

type FormSubmitMoleculeOwnProps = {
  ref?: PolymorphicRef<'div'>;
};

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
