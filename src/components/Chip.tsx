import styled from 'styled-components';
import { box, BoxProps } from './Box';
import { variants } from 'styled-theming';
import { FillButton } from './Buttons/Button';
import { rem } from 'polished';
import { borderRadius, typography } from '../styles/config';
import { StyledWhiteOutlineWrapper } from './StyledWhiteOutlineWrapper';

export const chipVariant = variants('mode', 'variant', {
  default: {
    light: FillButton,
    dark: FillButton,
  },
  outline: {
    light: StyledWhiteOutlineWrapper,
    dark: StyledWhiteOutlineWrapper,
  },
});

export const StyledChip = styled.div<Variant & BoxProps>`
  border-radius: ${borderRadius.xs};
  padding: ${rem(10)} ${rem(15)};
  ${typography.desktop.mini};
  ${chipVariant}
  ${box}
`;
type Variant = {
  variant?: 'default' | 'outline';
};

StyledChip.defaultProps = {
  alignSelf: 'flex-start',
  variant: 'default',
};
