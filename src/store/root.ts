import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import slices from './slices';

const persistConfig = {
  key: 'root',
  storage
};

const rootReducer = combineReducers({
  [slices.header.name]: slices.header.reducer
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = configureStore({
  reducer: persistedReducer
});

type RootState = ReturnType<typeof store.getState>;

type AppDispatch = typeof store.dispatch;

export default store;
export type { RootState, AppDispatch };
