import React, { FC } from 'react';
import styled from 'styled-components';
import { baseTheme, borderRadius } from '../styles/config';
import { Box } from '../components/Box';
import { H4, Subtitle } from '../styles/globalFontStyles';
import { StyledButton } from '../components/Buttons/Button';
import { currencyFormatter } from '../utils/currencyFormatter';

const StyledBottomBar = styled.div`
  border-radius: ${borderRadius.s};
  position: relative;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

type Props = {
  withGrams?: boolean;
  price: string;
  buttonText?: string;
  onClick?: () => void;
  disabledButton?: boolean;
};
export const BottomBar: FC<Props> = ({
  withGrams = false,
  price,
  buttonText,
  onClick,
  disabledButton = false,
}) => {
  return (
    <StyledBottomBar>
      <Box
        display={'flex'}
        justifyContent={'center'}
        flexDirection={'column'}
      >
        <H4 color={baseTheme.primary}>
          Итого: {currencyFormatter('ru', parseFloat(price))}
        </H4>
        {withGrams && <Subtitle>400 г</Subtitle>}
      </Box>
      <StyledButton
        paddingSize={'medium'}
        alignSelf={'center'}
        type={'submit'}
        onClick={onClick}
        disabled={disabledButton}
      >
        {buttonText ? buttonText : 'Оформить заказ'}
      </StyledButton>
    </StyledBottomBar>
  );
};
