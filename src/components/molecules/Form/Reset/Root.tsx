import { Slot } from '@radix-ui/react-slot';
import { ComponentPropsWithRef, forwardRef } from 'react';

type FormResetMoleculeOwnProps = {};

type FormResetMoleculeProps = FormResetMoleculeOwnProps &
  Omit<ComponentPropsWithRef<'button'>, keyof FormResetMoleculeOwnProps>;

const FormResetMolecule = (
  props: FormResetMoleculeProps,
  ref: FormResetMoleculeProps['ref']
) => {
  return (
    <Slot
      ref={ref}
      type='reset'
      {...props}
    />
  );
};

export default forwardRef(FormResetMolecule);
export type { FormResetMoleculeProps };
