import styled from 'styled-components';
import { borderRadius } from '../../styles/config';
import { rem } from 'polished';
import { StyledWhiteOutlineWrapper } from '../../components/StyledWhiteOutlineWrapper';

export const StyledBagItemSmall = styled.div`
  border-radius: ${borderRadius.s};
  position: relative;
  display: flex;
  flex-direction: row;
  padding: ${rem(15)};
  ${StyledWhiteOutlineWrapper}
`;
