import React from 'react';
import useModal from '../hooks/useModal';
import { Box } from '../components/Box';
import { rem } from 'polished';
import { H2 } from '../styles/globalFontStyles';
import { CloseIcon } from '../assets/Icons/CloseIcon';
import { StyledLine } from '../components/StyledLine';
import { CartButton } from '../components/Buttons/CartButton';
import { BottomBar } from './BottomBar';
import { BagItemDishSmall } from './bagItems/BagItemDishSmall';
import { StyledModalLeftSide } from './ModalStyles';
import { useAppSelector } from '../hooks/useTypedRedux';
import { CartItemEnum } from '../store/redusers/cartItem/types';
import { BagItemGoodSmall } from './bagItems/BagItemGoodSmall';
import { useNavigate } from 'react-router-dom';
import Paths from '../router/globalRoutes/paths';

export const CartModal = () => {
  const { handleClose, handleOpen, open } = useModal();
  const { cartItems, totalPrice } = useAppSelector(
    (state) => state.cartSlice,
  );
  const navigate = useNavigate();
  return (
    <>
      <CartButton onClick={handleOpen} value={totalPrice} />
      <StyledModalLeftSide
        isOpen={open}
        onRequestClose={handleClose}
        contentLabel='Example Modal'
      >
        <Box
          display={'flex'}
          flexDirection={'column'}
          width={'100%'}
          height={'100%'}
          overflow={'auto'}
          marginGapVertical={20}
          pt={rem(32)}
          pl={rem(20)}
          pb={rem(20)}
          pr={rem(20)}
        >
          <Box
            display={'flex'}
            flexDirection={'row'}
            width={'100%'}
            alignItems={'flex-end'}
            justifyContent={'space-between'}
          >
            <H2>Ваш заказ</H2>
            <button onClick={handleClose}>
              <CloseIcon />
            </button>
          </Box>
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
        </Box>
        <StyledLine width={'100%'} />
        <Box
          width={'100%'}
          pt={rem(10)}
          pb={rem(12)}
          pr={rem(20)}
          pl={rem(20)}
        >
          <BottomBar
            price={totalPrice.toString()}
            onClick={() => {
              navigate(Paths.CART_PAGE);
              handleClose();
            }}
          />
        </Box>
      </StyledModalLeftSide>
    </>
  );
};
