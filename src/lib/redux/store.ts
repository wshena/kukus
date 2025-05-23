import { FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER } from 'redux-persist';
import { Action, combineReducers, configureStore, ThunkAction } from "@reduxjs/toolkit";
import { persistReducer, persistStore } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import utilityReducer from '@/lib/redux/slice/utility.action'
import gameReducer from '@/lib/redux/slice/game.action'
import filterReducer from '@/lib/redux/slice/filter.action'
import alertReducer from '@/lib/redux/slice/alert.action'
import authReducer from '@/lib/redux/slice/auth.action'

const persistConfig = {
  key: 'root',
  storage: storage,
  blacklist: ['utility', 'alert']
};

const rootReducer = combineReducers({
  utility: utilityReducer,
  game: gameReducer,
  filter: filterReducer,
  alert: alertReducer,
  auth: authReducer
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
    serializableCheck: {
      // Abaikan pengecekan serializable untuk action-action redux-persist berikut
      ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
    },
  }),
})

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType, 
  RootState, 
  unknown, 
  Action<string>
>;

export const persistor = persistStore(store);