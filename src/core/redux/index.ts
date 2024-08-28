import { configureStore } from '@reduxjs/toolkit';
import { persistReducer, persistStore } from 'redux-persist';
import storage from 'redux-persist/lib/storage'; // defaults to localStorage for web
import { useDispatch } from 'react-redux';
import { combineReducers } from 'redux';
import reducers from './reducers'; // your existing reducers

// Persist configuration
const persistConfig = {
  key: 'root',
  storage,
};

// Combine your existing reducers
const rootReducer = combineReducers({
  ...reducers,
});

// Create a persisted reducer
const persistedReducer = persistReducer(persistConfig, rootReducer);

// Configure store with the persisted reducer
const store = configureStore({
  reducer: persistedReducer,
});

// Create a persistor
export const persistor = persistStore(store);

// Types for dispatch and state
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

// Typed useDispatch hook
export const useAppDispatch = () => useDispatch<AppDispatch>();

export default store;
