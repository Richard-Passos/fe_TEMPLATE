import { useDispatch as useReduxDispatch } from 'react-redux';

import type { AppDispatch } from './root';

const useDispatch = useReduxDispatch.withTypes<AppDispatch>();

export default useDispatch;
