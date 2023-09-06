import { combineReducers, configureStore } from '@reduxjs/toolkit';
import uiModeSlice from './redusers/uiMode/uiMode.slice';
import { loadThemeMode } from './redusers/uiMode/localStoreActions';
import cartSlice from './redusers/cartItem/cart.slice';
import authModalSlice from './redusers/authModal/authModal.slice';

const rootReducer = combineReducers({
  uiModeSlice,
  cartSlice,
  authModalSlice,
});

export const store = configureStore({
  reducer: rootReducer,
  preloadedState: {
    uiModeSlice: {
      mode: loadThemeMode(),
    },
  },
});
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
