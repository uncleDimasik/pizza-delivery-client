import React from 'react';
import { ContainerSmall } from '../styles/global';
import { H1, H3 } from '../styles/globalFontStyles';
import { Box } from '../components/Box';
import { rem } from 'polished';
import { Carousel } from '../components/Carousel';
import { FoodDeliveryForm } from '../views/CartForm';
import { useAppSelector } from '../hooks/useTypedRedux';
import { CartItemEnum } from '../store/redusers/cartItem/types';
import { BagItemDishSmall } from '../views/bagItems/BagItemDishSmall';
import { BagItemGoodSmall } from '../views/bagItems/BagItemGoodSmall';

export const CartPage = () => {
  const { cartItems } = useAppSelector((state) => state.cartSlice);
  return (
    <ContainerSmall>
      <Box pt={rem(40)} pb={rem(24)}>
        <H1>Ваш заказ</H1>
      </Box>
      <Box marginGapVertical={15}>
        {cartItems.map((item) =>
          item.type === CartItemEnum.dish ? (
            <BagItemDishSmall
              key={item.customerDish?.parentDishId}
              {...item}
            />
          ) : (
            <BagItemGoodSmall key={item.goodId} {...item} />
          ),
        )}
        {/* <BagItemBig />*/}
      </Box>
      <H3 pt={rem(53)} pb={rem(24)}>
        Добавить к заказу?
      </H3>
      <Carousel />
      <FoodDeliveryForm />
    </ContainerSmall>
  );
};
