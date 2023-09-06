import { ThemeProvider as StyledThemeProvider } from 'styled-components';
import React, { FC, PropsWithChildren } from 'react';
import { GlobalStyle } from '../global';
import { useAppSelector } from '../../hooks/useTypedRedux';
import { breakpoints } from '../config';

export const ThemeProvider: FC<PropsWithChildren> = ({
  children,
}) => {
  const { mode } = useAppSelector((state) => state.uiModeSlice);
  return (
    <StyledThemeProvider theme={{ mode, breakpoints }}>
      <GlobalStyle />
      {children}
    </StyledThemeProvider>
  );
};
