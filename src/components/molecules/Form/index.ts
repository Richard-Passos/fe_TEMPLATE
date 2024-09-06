import FormControl, { FormControlProps } from './Control';
import FormReset, { FormResetProps } from './Reset';
import FormRoot, {
  FormMoleculeWithProviderProps as FormRootProps
} from './Root';
import FormSubmit, { FormSubmitProps } from './Submit';
import FormWatch, { FormWatchProps } from './Watch';

const Form = {
  Root: FormRoot,
  Control: FormControl,
  Reset: FormReset,
  Submit: FormSubmit,
  Watch: FormWatch
};

export default Form;
export { FormRoot, FormControl, FormReset, FormSubmit, FormWatch };
export type {
  FormRootProps,
  FormControlProps,
  FormResetProps,
  FormSubmitProps,
  FormWatchProps
};
