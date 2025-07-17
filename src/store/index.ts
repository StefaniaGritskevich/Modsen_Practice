import { configureStore } from '@reduxjs/toolkit';
import { persistReducer, persistStore } from 'redux-persist';

import kanbanReducer from './kanbanSlice';
import StorageService from './storeServise';
const persistConfig = StorageService.getPersistConfig('kanban');

const persistedReducer = persistReducer(persistConfig, kanbanReducer);

export const store = configureStore({
  reducer: {
    kanban: persistedReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export const persistor = persistStore(store);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;