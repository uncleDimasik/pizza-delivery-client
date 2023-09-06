import styled from 'styled-components';
import { box, BoxProps } from './Box';

export const StyledIcon = styled.svg<BoxProps>`
  display: block;
  ${box}
`;
