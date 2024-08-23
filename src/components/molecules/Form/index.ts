import FormControl, { FormControlProps } from './Control';
import FormReset, { FormResetProps } from './Reset';
import FormRoot, { FormMoleculeProps as FormRootProps } from './Root';
import FormSubmit, { FormSubmitProps } from './Submit';

const Form = {
  Root: FormRoot,
  Control: FormControl,

  Reset: FormReset,
  Submit: FormSubmit
};

export default Form;
export { FormRoot, FormControl, FormReset, FormSubmit };
export type {
  FormRootProps,
  FormControlProps,
  FormResetProps,
  FormSubmitProps
};
