import React, { FC, useCallback } from 'react';
import styled from 'styled-components';
import { baseTheme, borderRadius } from '../../styles/config';
import { StyledWhiteOutlineWrapper } from '../../components/StyledWhiteOutlineWrapper';
import { Box } from '../../components/Box';
import { rem } from 'polished';
import { Mini, Subtitle2 } from '../../styles/globalFontStyles';
import { CounterButton } from '../../components/Buttons/CounterButton';
import { ExtendedCardItem } from '../../store/redusers/cartItem/types';
import {
  useDishQuery,
  useGoodQuery,
} from '../../@generated/generated.graphql';
import { currencyFormatter } from '../../utils/currencyFormatter';
import { cartSlice } from '../../store/redusers/cartItem/cart.slice';
import { useAppDispatch } from '../../hooks/useTypedRedux';
import { StyledBagItemSmall } from './StyledBagItem';
import { CloseIcon } from '../../assets/Icons/CloseIcon';

export const BagItemGoodSmall: FC<ExtendedCardItem> = ({
  goodId,
  price,
  quantity,
}) => {
  const { data } = useGoodQuery({
    variables: {
      where: {
        id: goodId,
      },
    },
  });
  const { changeGoodQuantityById, deleteGoodById } =
    cartSlice.actions;
  const dispatch = useAppDispatch();

  function getDescription(str: string) {
    return `${str.substring(0, 25)}${str.length >= 25 ? '...' : ''}`;
  }

  return (
    <StyledBagItemSmall>
      {data && (
        <>
          <Box
            width={rem(94)}
            height={rem(94)}
            display={'flex'}
            justifyContent={'center'}
          >
            <img src={data!.good?.images?.[0]} alt={'Preview'} />
          </Box>
          <Box
            pl={rem(16)}
            display={'flex'}
            flexDirection={'column'}
            flex={'1 1 auto'}
          >
            <Subtitle2>{data.good.name}</Subtitle2>
            <Mini pt={rem(8)}>
              {getDescription(data.good.description)}
            </Mini>
            <Box
              display={'flex'}
              flexDirection={'row'}
              pt={rem(12)}
              alignItems={'center'}
              justifyContent={'space-between'}
            >
              <CounterButton
                quantity={quantity}
                onChange={(value) => {
                  dispatch(
                    changeGoodQuantityById({
                      id: data?.good.id,
                      quantity: value,
                    }),
                  );
                }}
              />
              <Subtitle2 color={baseTheme.primary}>
                {currencyFormatter('ru', price)}
              </Subtitle2>
            </Box>
          </Box>
          <Box
            onClick={() => dispatch(deleteGoodById(data?.good.id))}
            width={rem(20)}
            height={rem(20)}
          >
            <CloseIcon />
          </Box>
        </>
      )}
    </StyledBagItemSmall>
  );
};
