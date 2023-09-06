import theme from 'styled-theming';
import { css } from 'styled-components';
import { darkTheme, lightTheme } from '../styles/config';
import { rem } from 'polished';

export const StyledWhiteOutlineWrapper = theme('mode', {
  light: css`
    color: ${lightTheme.main};
    border: ${rem(1)} solid ${lightTheme.line} !important;
    background: ${lightTheme.secondary};
  `,
  dark: css`
    color: ${darkTheme.main};
    border: ${rem(1)} solid ${darkTheme.line} !important;
    background: ${darkTheme.secondary};
  `,
});
