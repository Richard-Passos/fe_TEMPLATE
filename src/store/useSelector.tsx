import { useSelector as useReduxSelector } from 'react-redux';

import { RootState } from './root';

const useSelector = useReduxSelector.withTypes<RootState>();

export default useSelector;
