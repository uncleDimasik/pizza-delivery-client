import * as React from 'react';
import { FC } from 'react';
import { ButtonProps, StyledButton } from './Button';
import { rem } from 'polished';
import { LeftArrowIcon } from '../../assets/Icons/LeftArrowIcon';
import styled from 'styled-components';

type PropsType = ButtonProps & {
  isRightDirection?: boolean;
};

const StyledRoundButton = styled(StyledButton)`
  border-radius: 50%;
`;
const StyledIconWrapper = styled.div<PropsType>`
  margin: auto;
  transform: ${(props) =>
    props.isRightDirection ? 'rotate(180deg)' : 'rotate(0)'};
`;
export const RoundButton: FC<PropsType> = ({
  onClick,
  isRightDirection,
}) => {
  return (
    <StyledRoundButton
      p={rem(15)}
      minWidth={rem(48)}
      onClick={onClick}
    >
      <StyledIconWrapper isRightDirection={isRightDirection}>
        <LeftArrowIcon />
      </StyledIconWrapper>
    </StyledRoundButton>
  );
};
