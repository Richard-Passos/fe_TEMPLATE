import CarouselProvider from './Carousel';
import CatalogProvider from './Catalog';
import DisclosureProvider from './Disclosure';
import FormProvider from './Form';
import MagneticProvider from './Magnetic';

const Providers = {
  Carousel: CarouselProvider,
  Catalog: CatalogProvider,
  Disclosure: DisclosureProvider,
  Form: FormProvider,
  Magnetic: MagneticProvider
};

export default Providers;
export {
  CarouselProvider,
  CatalogProvider,
  DisclosureProvider,
  FormProvider,
  MagneticProvider
};
