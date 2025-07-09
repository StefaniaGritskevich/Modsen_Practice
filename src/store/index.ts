import { configureStore } from '@reduxjs/toolkit';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import kanbanReducer from './kanbanSlice';

const persistConfig = {
  key: 'kanban',
  storage,
};

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
