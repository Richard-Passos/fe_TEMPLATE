import BooleanProvider from './Boolean';
import ColorsProvider from './Colors';
import FormProvider from './Form';
import RefProvider from './Ref';

const Providers = {
  Boolean: BooleanProvider,
  Colors: ColorsProvider,
  Form: FormProvider,
  Ref: RefProvider
};

export default Providers;
export { BooleanProvider, ColorsProvider, FormProvider, RefProvider };
