import styled, { css } from 'styled-components';
import { media, typography } from './config';
import { box, BoxProps } from '../components/Box';
import {
  color,
  ColorProps,
  typography as systemTypography,
  TypographyProps,
} from 'styled-system';

// ${fonts};
export const globalFontStyles = css`
  body {
    font-family: ${typography.font_family};
    font-size: ${typography.fz};
    font-weight: ${typography.fw_regular};
  }
`;
export const H1 = styled.h1<BoxProps & ColorProps & TypographyProps>`
  ${typography.desktop.h1}
  ${media.mdUp} {
    ${typography.mobile.h1};
  }

  ${systemTypography};
  ${box};
  ${color}
`;
export const H2 = styled.h2<BoxProps & ColorProps & TypographyProps>`
  ${typography.desktop.h2}
  ${media.mdUp} {
    ${typography.mobile.h2};
  }

  ${systemTypography};
  ${box};
  ${color}
`;
export const H3 = styled.h3<BoxProps & ColorProps & TypographyProps>`
  ${typography.desktop.h3}
  ${media.mdUp} {
    ${typography.mobile.h3};
  }

  ${systemTypography};
  ${box};
  ${color}
`;

export const H4 = styled.h4<BoxProps & ColorProps & TypographyProps>`
  ${typography.desktop.h4}
  ${media.mdUp} {
    ${typography.mobile.subtitle}
  }

  ${systemTypography};
  ${box};
  ${color}
`;
export const BigText = styled.div<
  BoxProps & ColorProps & TypographyProps
>`
  ${typography.desktop.bigText}
  ${media.mdUp} {
    ${typography.mobile.bigText}
  }

  ${systemTypography};
  ${box}
  ${color}
`;
export const Subtitle = styled.div<
  BoxProps & ColorProps & TypographyProps
>`
  ${typography.desktop.subtitle}
  ${media.mdUp} {
    ${typography.mobile.subtitle}
  }

  ${systemTypography};
  ${box}
  ${color}
`;
export const Normal = styled.div<
  BoxProps & ColorProps & TypographyProps
>`
  ${typography.desktop.normal}
  ${media.mdUp} {
    ${typography.mobile.normal}
  }

  ${systemTypography};
  ${box}
  ${color}
`;
export const Subtitle2 = styled.div<
  BoxProps & ColorProps & TypographyProps
>`
  ${typography.desktop.subtitle2}
  ${media.mdUp} {
    ${typography.mobile.subtitle}
  }

  ${systemTypography};
  ${box}
  ${color}
`;
export const Mini = styled.div<
  BoxProps & ColorProps & TypographyProps
>`
  ${typography.desktop.mini}
  ${media.mdUp} {
    ${typography.mobile.mini}
  }

  ${systemTypography};
  ${box}
  ${color}
`;
export const MiniBold = styled.div<
  BoxProps & ColorProps & TypographyProps
>`
  ${typography.desktop.miniBold}
  ${media.mdUp} {
    ${typography.mobile.miniBold}
  }

  ${systemTypography};
  ${box}
  ${color}
`;
