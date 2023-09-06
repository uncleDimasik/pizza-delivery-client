import React, { FC, useCallback } from 'react';
import styled from 'styled-components';
import { baseTheme, borderRadius } from '../../styles/config';
import { StyledWhiteOutlineWrapper } from '../../components/StyledWhiteOutlineWrapper';
import { Box } from '../../components/Box';
import { rem } from 'polished';
import { Mini, Subtitle2 } from '../../styles/globalFontStyles';
import { CounterButton } from '../../components/Buttons/CounterButton';
import { ExtendedCardItem } from '../../store/redusers/cartItem/types';
import { useDishQuery } from '../../@generated/generated.graphql';
import { currencyFormatter } from '../../utils/currencyFormatter';
import { cartSlice } from '../../store/redusers/cartItem/cart.slice';
import { useAppDispatch } from '../../hooks/useTypedRedux';
import { StyledBagItemSmall } from './StyledBagItem';
import { CloseIcon } from '../../assets/Icons/CloseIcon';

export const BagItemDishSmall: FC<ExtendedCardItem> = ({
  customerDish,
  price,
  quantity,
}) => {
  const { data } = useDishQuery({
    variables: {
      where: {
        id: customerDish?.parentDishId,
      },
    },
  });
  const { changeDishQuantityById, deleteDishById } =
    cartSlice.actions;
  const dispatch = useAppDispatch();
  const selectedOptions = useCallback(() => {
    if (data) {
      const option = data.dish.options?.find(
        (opt) => opt.id === customerDish?.selectedOptionsId,
      );
      if (option) {
        return option;
      }
    }
    return undefined;
  }, [data, customerDish]);

  function getDescription() {
    const description = `${
      selectedOptions()?.name
    }, ${selectedOptions()?.toppings?.map(
      (topping) => ` ${topping.ingredientLabel.name}`,
    )}`;
    return `${description.substring(0, 25)}${
      description.length >= 25 ? '...' : ''
    }`;
  }

  return (
    <StyledBagItemSmall>
      {data && (
        <>
          <Box width={rem(94)} height={rem(94)} display={'flex'}>
            <img src={data!.dish?.images?.[0]} alt={'Preview'} />
          </Box>
          <Box
            pl={rem(16)}
            display={'flex'}
            flexDirection={'column'}
            flex={'1 1 auto'}
          >
            <Subtitle2>{data.dish.name}</Subtitle2>
            <Mini pt={rem(8)}>{getDescription()}</Mini>
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
                    changeDishQuantityById({
                      id: data?.dish.id,
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
            onClick={() => dispatch(deleteDishById(data?.dish.id))}
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
