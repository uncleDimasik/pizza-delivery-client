import React, { FC } from 'react';
import styled from 'styled-components';
import { StyledWhiteOutlineWrapper } from '../components/StyledWhiteOutlineWrapper';
import { Box } from '../components/Box';
import { StyledButton } from '../components/Buttons/Button';
import { borderRadius } from '../styles/config';
import { rem } from 'polished';
import { Mini, Subtitle } from '../styles/globalFontStyles';
import { currencyFormatter } from '../utils/currencyFormatter';
import { cartSlice } from '../store/redusers/cartItem/cart.slice';
import { useAppDispatch } from '../hooks/useTypedRedux';
import { CartItemEnum } from '../store/redusers/cartItem/types';

const StyledAdditionalItem = styled.div`
  max-width: ${rem(190)};
  border-radius: ${borderRadius.s};
  position: relative;
  display: flex;
  flex-direction: column;
  ${StyledWhiteOutlineWrapper}
`;

// TODO: define Interface
// TODO: Add i18n
// TODO: TextSlice
type Props = {
  withGrams?: boolean;
  readonly id: string;
  readonly images?: readonly string[] | null | undefined;
  readonly name: string;
  readonly price: string;
  readonly slug: string;
  readonly description: string;
};

export const AdditionalItem: FC<Props> = ({
  withGrams,
  images,
  description,
  name,
  price,
  id,
}) => {
  const { addToCart } = cartSlice.actions;
  const dispatch = useAppDispatch();
  return (
    <StyledAdditionalItem>
      {images && <img src={images[0]} alt={'Preview'} />}
      <Box
        p={rem(16)}
        display={'flex'}
        alignItems={'center'}
        justifyContent={'center'}
        flexDirection={'column'}
      >
        <Subtitle textAlign={'center'}>{name}</Subtitle>
        {withGrams && (
          <Mini pt={rem(8)} textAlign={'center'}>
            {`${description.substring(0, 15)}${
              description.length >= 15 ? '...' : ''
            }`}
          </Mini>
        )}

        <Box
          display={'flex'}
          alignItems={'center'}
          justifyContent={'center'}
          pt={rem(16)}
          width={'100%'}
        >
          <StyledButton
            paddingSize={'small'}
            width={'100%'}
            onClick={() => {
              dispatch(
                addToCart({
                  price: parseFloat(price),
                  quantity: 1,
                  totalPrice: parseFloat(price) * 1,
                  type: CartItemEnum.good,
                  goodId: id,
                  customerDish: undefined,
                }),
              );
            }}
          >
            {currencyFormatter('ru', parseFloat(price))}
          </StyledButton>
        </Box>
      </Box>
    </StyledAdditionalItem>
  );
};
