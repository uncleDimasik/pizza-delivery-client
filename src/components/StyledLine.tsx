import styled from 'styled-components';
import { box, BoxProps } from './Box';
import { rem } from 'polished';
import { line } from '../styles/config';

export const StyledLine = styled.div<BoxProps>`
  height: ${rem(1)};
  background-color: ${line};
  ${box}
`;
