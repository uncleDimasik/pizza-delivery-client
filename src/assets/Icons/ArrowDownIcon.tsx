import { StyledIcon } from '../../components/StyledIcon';
import React, { FC } from 'react';
import styled from 'styled-components';

const StyledArrowDownIcon = styled(StyledIcon)<{
  isOpen?: boolean;
  $fill?: string;
}>`
  transform: ${(props) => (!props.isOpen ? '' : 'rotate(180deg)')};
  transition: 0.2s ease-in-out;
  fill: ${(props) => props.$fill};
`;

export const ArrowDownIcon: FC<{
  isOpen?: boolean;
  $fill?: string;
}> = ({ isOpen, $fill }) => {
  return (
    <StyledArrowDownIcon
      isOpen={isOpen}
      width='16'
      height='10'
      viewBox='0 0 16 10'
      xmlns='http://www.w3.org/2000/svg'
      $fill={$fill}
    >
      <path d='M16 1.35014C16 1.54195 15.9289 1.73395 15.7869 1.88038L8.5142 9.3803C8.23002 9.67336 7.76984 9.67336 7.48584 9.3803L0.213135 1.88038C-0.0710456 1.58732 -0.0710456 1.11276 0.213135 0.819893C0.497316 0.52702 0.957497 0.526833 1.2415 0.819893L8.00002 7.78957L14.7585 0.819892C15.0427 0.526833 15.5029 0.526833 15.7869 0.819892C15.9289 0.966328 16 1.15833 16 1.35014Z' />
    </StyledArrowDownIcon>
  );
};
ArrowDownIcon.defaultProps = {
  $fill: '#A5A5A5',
};
