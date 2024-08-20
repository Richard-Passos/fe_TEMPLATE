import CarouselProvider from './Carousel';
import CatalogProvider from './Catalog';
import DisclosureProvider from './Disclosure';
import MagneticProvider from './Magnetic';

const Providers = {
  Carousel: CarouselProvider,
  Catalog: CatalogProvider,
  Disclosure: DisclosureProvider,
  Magnetic: MagneticProvider
};

export default Providers;
export {
  CarouselProvider,
  CatalogProvider,
  DisclosureProvider,
  MagneticProvider
};
