import { Slot } from '@radix-ui/react-slot';
import { ComponentPropsWithRef, forwardRef } from 'react';

type FormSubmitMoleculeOwnProps = {};

type FormSubmitMoleculeProps = FormSubmitMoleculeOwnProps &
  Omit<ComponentPropsWithRef<'button'>, keyof FormSubmitMoleculeOwnProps>;

const FormSubmitMolecule = (
  props: FormSubmitMoleculeProps,
  ref: FormSubmitMoleculeProps['ref']
) => {
  return (
    <Slot
      ref={ref}
      type='submit'
      {...props}
    />
  );
};

export default forwardRef(FormSubmitMolecule);
export type { FormSubmitMoleculeProps };
