import * as React from 'react';
import { FC } from 'react';
import { ButtonProps, StyledButton } from './Button';
import { rem } from 'polished';
import { Box } from '../Box';
import { LeftArrowIcon } from '../../assets/Icons/LeftArrowIcon';

export const BackButton: FC<ButtonProps> = ({ onClick }) => {
  return (
    <StyledButton p={rem(15)} minWidth={rem(48)} onClick={onClick}>
      <Box m='auto'>
        <LeftArrowIcon />
      </Box>
    </StyledButton>
  );
};
