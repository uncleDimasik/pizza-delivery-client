import React, { FC } from 'react';
import styled from 'styled-components';
import { StyledWhiteOutlineWrapper } from '../components/StyledWhiteOutlineWrapper';
import { Box } from '../components/Box';
import { baseTheme, borderRadius } from '../styles/config';
import { rem } from 'polished';
import { Normal, Subtitle } from '../styles/globalFontStyles';
import { DishModal } from './productModals/DishModal';
import { currencyFormatter } from '../utils/currencyFormatter';
import { GoodModal } from './productModals/GoodModal';

const StyledItemCard = styled.div`
  max-width: ${rem(302)};
  min-width: ${rem(297)};
  min-height: ${rem(400)};
  border-radius: ${borderRadius.s};
  position: relative;
  display: flex;
  flex-direction: column;
  justify-self: center;
  justify-content: space-between;
  ${StyledWhiteOutlineWrapper}
`;

const StyledImagePreview = styled.img`
  display: block;
  width: 100%;
  max-height: 300px; /* adjust this as needed */
  object-fit: contain; /* scale and crop the image to fit the container */
  padding-top: ${rem(10)};
`;

// TODO: define Interface
// TODO: Add i18n
// TODO: TextSlice

type ItemCardProps = {
  readonly __typename?: 'Good' | 'Dish' | undefined;
  readonly id: string;
  readonly images?: readonly string[] | null | undefined;
  readonly name: string;
  readonly price: any;
  readonly description: string;
  readonly slug: string;
};

export const ItemCard: FC<ItemCardProps> = (props) => {
  return (
    <StyledItemCard>
      {/* <Box position={'absolute'} pt={rem(20)}>*/}
      {/*   <StyledItemLabel size={'small'}>NEW</StyledItemLabel>*/}
      {/* </Box>*/}
      {props.images && (
        <StyledImagePreview src={props.images[0]} alt={'Preview'} />
      )}
      <Box pr={rem(20)} pl={rem(20)} pb={rem(20)} pt={rem(16)}>
        <Subtitle>{props.name}</Subtitle>
        <Normal pt={rem(12)}>
          {props.description.substring(0, 45)}
          {props.description.length >= 45 && '...'}
        </Normal>
        <Box
          display={'flex'}
          flexDirection={'row'}
          alignItems={'center'}
          justifyContent={'space-between'}
          pt={rem(16)}
        >
          {props.__typename === 'Dish' ? (
            <DishModal id={props.id} />
          ) : (
            <GoodModal id={props.id} />
          )}

          <Subtitle color={baseTheme.primary}>
            {props.__typename === 'Dish' && 'от '}
            {currencyFormatter('ru', parseFloat(props.price))}
          </Subtitle>
        </Box>
      </Box>
    </StyledItemCard>
  );
};
