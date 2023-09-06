import styled, { css } from 'styled-components';
import { rem } from 'polished';
import {
  baseTheme,
  borderRadius,
  typography,
} from '../styles/config';
import { styledVariant } from '../utils/styledVariant';

type Props = {
  size: 'small' | 'big';
};

const size = styledVariant('size', {
  big: css`
    padding: ${rem(8)} ${rem(20)};
    ${typography.desktop.bigText}
  `,
  small: css`
    padding: ${rem(7)} ${rem(16)};
    ${typography.desktop.mini}
  `,
});

export const StyledItemLabel = styled.div<Props>`
  background-color: ${baseTheme.red};
  border-radius: 0 ${borderRadius.xs} ${borderRadius.xs} 0;
  width: fit-content;
  color: ${baseTheme.white};
  ${size}
`;
