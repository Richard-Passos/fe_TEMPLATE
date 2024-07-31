import { useDispatch as useReduxDispatch } from 'react-redux';

import { AppDispatch } from './root';

const useDispatch = useReduxDispatch.withTypes<AppDispatch>();

export default useDispatch;
