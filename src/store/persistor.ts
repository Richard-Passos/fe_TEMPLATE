import { persistStore } from 'redux-persist';

import store from './root';

const persistor = persistStore(store);

export default persistor;
