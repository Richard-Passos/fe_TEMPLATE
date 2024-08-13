import useCatalogContext from './useCatalog';
import useDisclosureContext from './useDisclosure';
import useHeaderContext from './useHeader';
import useSmoothScrollContext from './useSmoothScroll';

const hooksContexts = {
  useCatalog: useCatalogContext,
  useDisclosure: useDisclosureContext,
  useHeader: useHeaderContext,
  useSmoothScroll: useSmoothScrollContext
};

export default hooksContexts;
export {
  useCatalogContext,
  useDisclosureContext,
  useHeaderContext,
  useSmoothScrollContext
};
