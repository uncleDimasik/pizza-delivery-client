import styled from 'styled-components';
import { StyledWhiteOutlineWrapper } from './StyledWhiteOutlineWrapper';
import {
  baseTheme,
  borderRadius,
  media,
  typography,
} from '../styles/config';
import { rem } from 'polished';

export const StyledComment = styled.textarea`
  ${StyledWhiteOutlineWrapper};
  border-radius: ${borderRadius.xs};
  width: 100%;
  resize: none;
  padding-top: ${rem(13)};
  padding-left: ${rem(16)};
  height: ${rem(200)};
  &::placeholder {
    color: ${baseTheme.grayText};
    ${typography.desktop.normal}
    ${media.mdUp} {
      ${typography.mobile.normal}
    }
  }
`;
