import useDisclosureContext from './useDisclosure';
import useHeaderContext from './useHeader';
import useSmoothScrollContext from './useSmoothScroll';

const hooksContexts = {
  useDisclosure: useDisclosureContext,
  useHeader: useHeaderContext,
  useSmoothScroll: useSmoothScrollContext
};

export default hooksContexts;
export { useDisclosureContext, useHeaderContext, useSmoothScrollContext };
