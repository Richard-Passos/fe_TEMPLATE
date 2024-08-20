import useCarouselContext from './useCarousel';
import useCatalogContext from './useCatalog';
import useDisclosureContext from './useDisclosure';
import useHeaderContext from './useHeader';
import useMagneticContext from './useMagnetic';
import useSmoothScrollContext from './useSmoothScroll';

const hooksContexts = {
  useCarousel: useCarouselContext,
  useCatalog: useCatalogContext,
  useDisclosure: useDisclosureContext,
  useHeader: useHeaderContext,
  useMagnetic: useMagneticContext,
  useSmoothScroll: useSmoothScrollContext
};

export default hooksContexts;
export {
  useCarouselContext,
  useCatalogContext,
  useDisclosureContext,
  useHeaderContext,
  useMagneticContext,
  useSmoothScrollContext
};
