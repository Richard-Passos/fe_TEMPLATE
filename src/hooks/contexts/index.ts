import useCarouselContext from './useCarousel';
import useCatalogContext from './useCatalog';
import useDisclosureContext from './useDisclosure';
import useFormContext from './useForm';
import useHeaderContext from './useHeader';
import useMagneticContext from './useMagnetic';
import useSmoothScrollContext from './useSmoothScroll';

const hooksContexts = {
  useCarousel: useCarouselContext,
  useCatalog: useCatalogContext,
  useDisclosure: useDisclosureContext,
  useForm: useFormContext,
  useHeader: useHeaderContext,
  useMagnetic: useMagneticContext,
  useSmoothScroll: useSmoothScrollContext
};

export default hooksContexts;
export {
  useCarouselContext,
  useCatalogContext,
  useDisclosureContext,
  useFormContext,
  useHeaderContext,
  useMagneticContext,
  useSmoothScrollContext
};
