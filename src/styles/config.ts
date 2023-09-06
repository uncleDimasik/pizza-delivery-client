import theme from 'styled-theming';
import { em, rem } from 'polished';
import { css } from 'styled-components';

export const baseTheme = {
  transparent: 'transparent',
  primary: '#FF7010',
  grayText: '#A5A5A5',
  red: '#E23535',
  lightPrimary: '#FFEEE2',
  green: '#24D17E',
  white: '#fff',
  black: '#000',
};

export const lightTheme = {
  main: '#191919',
  line: '#F0F0F0',
  background: '#F9F9F9',
  secondary: '#FFFFFF',
};
export const darkTheme = {
  main: '#fff',
  line: '#969696',
  background: '#000',
  secondary: '#2C2C2C',
};

export const container = {
  minWidth: 320,
  maxWidth: 1600,
  max_container: 1290,
  max_container_small: 850,
  container_padding: 15,
  container_width: 1290 + 15 * 2,
  container_width_small: 850 + 15 * 2,
};

const variables = {
  space_unit: 1,
  border_unit: 1,
};

type BreakpointsProp = Array<string> & {
  sm?: string;
  md?: string;
  lg?: string;
  xl?: string;
};

export const breakpoints: BreakpointsProp = [
  em(576),
  em(768),
  em(992),
  em(container.container_width),
];
breakpoints.sm = breakpoints[0];
breakpoints.md = breakpoints[1];
breakpoints.lg = breakpoints[2];
breakpoints.xl = breakpoints[3];

export const borderRadius = {
  // 3
  xxs: `${0.1875 * variables.border_unit}rem`,
  // 6
  xs: `${0.375 * variables.border_unit}rem`,
  // 12
  s: `${0.75 * variables.border_unit}rem`,
  // 14
  sx: `${0.875 * variables.border_unit}rem`,
  // 24
  x: `${1.5 * variables.border_unit}rem`,
};

const customMediaQueryUp = (maxWidth: string) =>
  `@media screen and (max-width: ${maxWidth})`;

const customMediaQueryDown = (minWidth: string) =>
  `@media  screen and  (min-width: ${minWidth})`;

export const media = {
  customUp: customMediaQueryUp,
  customDow: customMediaQueryDown,
  smUp: customMediaQueryUp(breakpoints.sm),
  mdUp: customMediaQueryUp(breakpoints.md),
  lgUp: customMediaQueryUp(breakpoints.lg),
  smDown: customMediaQueryDown(breakpoints.sm),
  mdDown: customMediaQueryDown(breakpoints.md),
  lgDown: customMediaQueryDown(breakpoints.lg),
};

export const depths = {
  menu: 5,
  modal: 9999,
};

export const typography = {
  font_family: 'Inter, sans-serif',
  fz: rem(16),
  fw_regular: 400,
  fw_semi_bold: 600,
  fw_thin: 100,
  desktop: {
    h1: css`
      font-size: ${rem(40)};
      line-height: ${48 / 40};
      font-weight: 600;
    `,
    h2: css`
      font-size: ${rem(32)};
      line-height: ${40 / 32};
      font-weight: 600;
    `,
    h3: css`
      font-size: ${rem(24)};
      line-height: ${32 / 24};
      font-weight: 600;
    `,
    h4: css`
      font-size: ${rem(20)};
      line-height: ${28 / 20};
      font-weight: 600;
    `,
    bigText: css`
      font-size: ${rem(18)};
      line-height: ${24 / 18};
      font-weight: 400;
    `,
    subtitle: css`
      font-size: ${rem(18)};
      line-height: ${24 / 18};
      font-weight: 100;
    `,
    normal: css`
      font-size: ${rem(16)};
      line-height: ${22 / 16};
      font-weight: 400;
    `,
    subtitle2: css`
      font-size: ${rem(16)};
      line-height: ${20 / 16};
      font-weight: 600;
    `,
    mini: css`
      font-size: ${rem(14)};
      line-height: ${18 / 14};
      font-weight: 400;
    `,
    miniBold: css`
      font-size: ${rem(14)};
      line-height: ${18 / 14};
      font-weight: 600;
    `,
  },
  mobile: {
    h1: css`
      font-size: ${rem(28)};
      line-height: ${32 / 28};
      font-weight: 600;
    `,
    h2: css`
      font-size: ${rem(24)};
      line-height: ${32 / 24};
      font-weight: 600;
    `,
    h3: css`
      font-size: ${rem(18)};
      line-height: ${22 / 18};
      font-weight: 600;
    `,
    bigText: css`
      font-size: ${rem(16)};
      line-height: ${20 / 16};
      font-weight: 400;
    `,
    subtitle: css`
      font-size: ${rem(14)};
      line-height: ${18 / 14};
      font-weight: 600;
    `,
    normal: css`
      font-size: ${rem(14)};
      line-height: ${18 / 14};
      font-weight: 400;
    `,
    mini: css`
      font-size: ${rem(12)};
      line-height: ${16 / 12};
      font-weight: 400;
    `,
    miniBold: css`
      font-size: ${rem(12)};
      line-height: ${16 / 12};
      font-weight: 600;
    `,
  },
};
export const backgroundColor = theme('mode', {
  light: lightTheme.background,
  dark: darkTheme.background,
});
export const color = theme('mode', {
  light: lightTheme.main,
  dark: darkTheme.main,
});
export const line = theme('mode', {
  light: lightTheme.line,
  dark: darkTheme.line,
});
export const secondary = theme('mode', {
  light: lightTheme.secondary,
  dark: darkTheme.secondary,
});
