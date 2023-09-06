import React, { FC, PropsWithChildren } from 'react';
import styled from 'styled-components';
import { ButtonLoader } from './ButtonLoader';
import { ButtonProps, StyledButton } from './Button';

interface Props {
  disabled?: boolean;
  text?: string;
  loading?: boolean;
}

const StyledLoadButton = styled(StyledButton)`
  display: flex;
  justify-content: center;

  &:disabled {
    background: #e7e8e9;
    color: #9fa3a9;
    cursor: not-allowed;
  }
`;

export const LoadButton: FC<
  Props & ButtonProps & PropsWithChildren
> = ({ onClick, loading = false, disabled, children }) => {
  return (
    <StyledLoadButton onClick={onClick} disabled={disabled}>
      {loading && <ButtonLoader />}
      {children}
    </StyledLoadButton>
  );
};

LoadButton.defaultProps = {
  disabled: false,
  text: '',
  loading: false,
};
