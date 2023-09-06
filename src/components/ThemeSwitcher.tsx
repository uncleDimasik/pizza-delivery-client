import React from 'react';
import {
  useAppDispatch,
  useAppSelector,
} from '../hooks/useTypedRedux';
import { StyledButton } from './Buttons/Button';
import { saveThemeMode } from '../store/redusers/uiMode/localStoreActions';
import { switchMode } from '../utils/switchMode';

export const ThemeSwitcher = () => {
  const { mode } = useAppSelector((state) => state.uiModeSlice);
  const dispatch = useAppDispatch();
  return (
    <StyledButton
      paddingSize={'small'}
      flexBasis='auto'
      variant={'outline'}
      onClick={() => {
        dispatch(saveThemeMode(switchMode(mode)));
      }}
    >
      Тема: {mode}
    </StyledButton>
  );
};
