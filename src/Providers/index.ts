import BooleanProvider from './Boolean';
import CarouselProvider from './Carousel';
import CatalogProvider from './Catalog';
import FormProvider from './Form';
import MagneticProvider from './Magnetic';

const Providers = {
  Boolean: BooleanProvider,
  Carousel: CarouselProvider,
  Catalog: CatalogProvider,
  Form: FormProvider,
  Magnetic: MagneticProvider
};

export default Providers;
export {
  BooleanProvider,
  CarouselProvider,
  CatalogProvider,
  FormProvider,
  MagneticProvider
};
