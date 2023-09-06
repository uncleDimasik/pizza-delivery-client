import { AppDispatch } from '../../store';
import { uiModeSlice } from './uiMode.slice';
import { Mode } from './types';
import { getBrowserMode } from '../../../utils/getBrowserMode';

export const THEME_MODE = 'THEME_MODE';
const { setMode } = uiModeSlice.actions;

export const saveThemeMode =
  (mode: Mode) => async (dispatch: AppDispatch) => {
    try {
      console.log(`DarkThemeIsSaved  ${mode}`);
      const serializedState = JSON.stringify(mode);
      localStorage.setItem(THEME_MODE, serializedState);
      dispatch(setMode(mode));
    } catch (e) {
      /* empty */
    }
  };
export const loadThemeMode = (): Mode => {
  try {
    const serializedState = localStorage.getItem(THEME_MODE);
    if (serializedState === null) {
      return getBrowserMode();
    }
    return JSON.parse(serializedState);
  } catch (error) {
    return Mode.light;
  }
};
