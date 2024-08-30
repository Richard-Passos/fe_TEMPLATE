import useBooleanContext from './useBoolean';
import useCarouselContext from './useCarousel';
import useCatalogContext from './useCatalog';
import useFormContext from './useForm';
import useHeaderContext from './useHeader';
import useMagneticContext from './useMagnetic';
import useSmoothScrollContext from './useSmoothScroll';

const hooksContexts = {
  useBoolean: useBooleanContext,
  useCarousel: useCarouselContext,
  useCatalog: useCatalogContext,
  useForm: useFormContext,
  useHeader: useHeaderContext,
  useMagnetic: useMagneticContext,
  useSmoothScroll: useSmoothScrollContext
};

export default hooksContexts;
export {
  useBooleanContext,
  useCarouselContext,
  useCatalogContext,
  useFormContext,
  useHeaderContext,
  useMagneticContext,
  useSmoothScrollContext
};
