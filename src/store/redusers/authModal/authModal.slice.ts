import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Mode } from '../uiMode/types';
import { AuthModalType } from './types';

const initialState: AuthModalType = {
  isAuthModalOpened: false,
};

export const authModalSlice = createSlice({
  name: 'authModal',
  initialState,
  reducers: {
    openAuthModal(state: AuthModalType) {
      state.isAuthModalOpened = true;
    },
    closeAuthModal(state: AuthModalType) {
      state.isAuthModalOpened = false;
    },
  },
});

export default authModalSlice.reducer;
