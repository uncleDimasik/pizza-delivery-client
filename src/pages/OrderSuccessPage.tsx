import React from 'react';
import { Box } from '../components/Box';
import order_success from '../assets/order-success.svg';
import { H3, Normal } from '../styles/globalFontStyles';
import { StyledButton } from '../components/Buttons/Button';
import { useNavigate, useParams } from 'react-router-dom';
import Paths from '../router/globalRoutes/paths';
import { rem } from 'polished';

export const OrderSuccessPage = () => {
  const navigate = useNavigate();
  const { number } = useParams();
  return (
    <Box
      display={'flex'}
      flexDirection={'column'}
      alignItems={'center'}
      justifyContent={'center'}
      height={'50vh'}
    >
      <img src={order_success} alt={'success'} />
      <H3 pt={rem(20)}>{`Заказ №${number} принят`}</H3>
      <Normal>Спасибо за заказ!</Normal>
      <Normal>Статус отследить можно нажав на кнопку ниже</Normal>
      <StyledButton
        mt={rem(20)}
        onClick={() => navigate('/' + Paths.ACCOUNT_PAGE)}
      >
        Отследить заказ
      </StyledButton>
    </Box>
  );
};
