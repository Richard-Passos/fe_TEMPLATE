import useBooleanContext from './useBoolean';
import useCarouselContext from './useCarousel';
import useCatalogContext from './useCatalog';
import useFormContext from './useForm';
import useHeightContext from './useHeight';
import useMagneticContext from './useMagnetic';
import useSmoothScrollContext from './useSmoothScroll';

const hooksContexts = {
  useBoolean: useBooleanContext,
  useCarousel: useCarouselContext,
  useCatalog: useCatalogContext,
  useForm: useFormContext,
  useHeight: useHeightContext,
  useMagnetic: useMagneticContext,
  useSmoothScroll: useSmoothScrollContext
};

export default hooksContexts;
export {
  useBooleanContext,
  useCarouselContext,
  useCatalogContext,
  useFormContext,
  useHeightContext,
  useMagneticContext,
  useSmoothScrollContext
};
