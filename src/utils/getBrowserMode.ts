import { Mode } from '../store/redusers/uiMode/types';

export const getBrowserMode = (): Mode => {
  if (
    !window.matchMedia ||
    window.matchMedia('(prefers-color-scheme)').media === 'not all'
  ) {
    // not supported
    return Mode.light;
  }
  const colorSchemeQuery = window.matchMedia(
    '(prefers-color-scheme: dark)',
  );
  if (colorSchemeQuery.matches) {
    return Mode.dark;
  }
  return Mode.light;
};
