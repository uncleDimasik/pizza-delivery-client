import styled, { css } from 'styled-components';
import theme from 'styled-theming';
import { rem } from 'polished';
import {
  baseTheme,
  borderRadius,
  darkTheme,
  lightTheme,
  media,
  typography,
} from '../../styles/config';
import { box, BoxProps } from '../Box';
import { styledVariant } from '../../utils/styledVariant';

export const FillButton = css`
  background-color: ${baseTheme.primary};
  color: ${baseTheme.white};
`;

export const FillButtonSecondary = css`
  background-color: ${baseTheme.lightPrimary};
  color: ${baseTheme.primary};
`;
const StyledButtonSpace = css`
  display: flex;
  justify-content: center;
  align-items: center;
  height: min-content;
  border-radius: ${borderRadius.xs};
  padding: ${rem(13)} ${rem(40)};
  margin: 0;
`;
const Variant = theme.variants('mode', 'variant', {
  default: {
    light: FillButton,
    dark: FillButton,
  },
  outline: {
    light: css`
      background-color: ${baseTheme.white};
      color: ${baseTheme.primary};
      border: ${rem(1)} solid ${baseTheme.primary};
    `,
    dark: css`
      background-color: ${darkTheme.secondary};
      color: ${baseTheme.primary};
      border: ${rem(1)} solid ${baseTheme.primary};
    `,
  },
  outlineGray: {
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
  },
  secondary: {
    light: FillButtonSecondary,
    dark: FillButtonSecondary,
  },
});

const paddingSize = styledVariant('paddingSize', {
  big: css`
    padding: ${rem(13)} ${rem(40)};
  `,
  medium: css`
    padding: ${rem(13)} ${rem(24)};
  `,
  small: css`
    padding: ${rem(8)} ${rem(16)};
  `,
});

const fontVariant = styledVariant('fontVariant', {
  normal: css`
    ${typography.desktop.normal};

    ${media.mdUp} {
      ${typography.mobile.normal};
    }
  `,
  bold: css`
    ${typography.desktop.subtitle2};

    ${media.mdUp} {
      ${typography.mobile.subtitle};
    }
  `,
});

type Variant = {
  variant?: 'default' | 'outline' | 'outlineGray' | 'secondary';
};

type Props = Variant & {
  paddingSize?: 'small' | 'big' | 'medium';
  fontVariant?: 'bold' | 'normal';
  disabled?: boolean;
};
export type ButtonProps = {
  onClick?: () => void;
};

export const StyledButton = styled.button<Props & BoxProps>`
  ${fontVariant}
  ${StyledButtonSpace}
  ${paddingSize}
  ${Variant}
  ${box}
 ${(props) =>
    props.disabled &&
    css`
      opacity: 0.5;
    `}
`;

StyledButton.defaultProps = {
  fontVariant: 'normal',
  paddingSize: 'big',
  variant: 'default',
};
