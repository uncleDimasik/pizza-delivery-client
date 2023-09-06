import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Mode, Theme } from './types';

const initialState: Theme = {
  mode: Mode.light,
};

export const uiModeSlice = createSlice({
  name: 'uiMode',
  initialState,
  reducers: {
    setDarkMode(state: Theme) {
      console.log('Theme DARK');
      state.mode = Mode.dark;
    },
    setLightMode(state: Theme) {
      console.log('Theme LIGHT');
      state.mode = Mode.light;
    },
    setMode(state: Theme, action: PayloadAction<Mode>) {
      console.log(`Theme ${action.payload.toString()}`);
      state.mode = action.payload;
    },
  },
});

export default uiModeSlice.reducer;
