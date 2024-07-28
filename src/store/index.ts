import persistor from './persistor';
import store, { AppDispatch, RootState } from './root';
import useDispatch from './useDispatch';
import useSelector from './useSelector';

export default store;
export { persistor, useDispatch, useSelector };
export type { AppDispatch, RootState };
