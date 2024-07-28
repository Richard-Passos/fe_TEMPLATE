import { useSelector as useReduxSelector } from 'react-redux';

import type { RootState } from './root';

const useSelector = useReduxSelector.withTypes<RootState>();

export default useSelector;
