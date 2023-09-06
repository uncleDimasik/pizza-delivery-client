import { Mode } from '../store/redusers/uiMode/types';

export const switchMode = (mode: Mode): Mode => {
  if (mode === 'light') {
    return Mode.dark;
  }
  return Mode.light;
};
