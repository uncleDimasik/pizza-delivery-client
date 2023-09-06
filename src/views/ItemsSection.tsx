import React, { FC } from 'react';
import styled from 'styled-components';
import { Box } from '../components/Box';
import { ItemCard } from './ItemCard';
import { H1 } from '../styles/globalFontStyles';
import { rem } from 'polished';
import {
  useDishesQuery,
  useGoodsQuery,
} from '../@generated/generated.graphql';

const StyledItemsSections = styled.div`
  padding-top: ${rem(20)};
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(16.375rem, 1fr));
  gap: ${rem(30)};
`;

export const ItemsSection: FC<{ id: string; name: string }> = (
  props,
) => {
  const { data: dishes } = useDishesQuery({
    variables: {
      where: {
        categoryId: {
          equals: props.id,
        },
      },
    },
  });
  const { data: goods } = useGoodsQuery({
    variables: {
      where: {
        categoryId: {
          equals: props.id,
        },
      },
    },
  });
  return (
    <Box display={'flex'} flexDirection={'column'} pb={rem(45)}>
      <Box display={'flex'} justifyContent={'space-between'}>
        <H1>{props.name}</H1>
        {/* <FilterModal /> */}
      </Box>
      <StyledItemsSections>
        {dishes &&
          dishes.dishes.map((item) => (
            <ItemCard key={item.id} {...item} />
          ))}
        {goods &&
          goods.goods.map((item) => (
            <ItemCard key={item.id} {...item} />
          ))}
      </StyledItemsSections>
    </Box>
  );
};
