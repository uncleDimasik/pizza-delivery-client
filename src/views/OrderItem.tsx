import React, { FC } from 'react';
import { Box } from '../components/Box';
import styled from 'styled-components';
import { rem } from 'polished';
import { Mini, Subtitle2 } from '../styles/globalFontStyles';
import { baseTheme } from '../styles/config';
import { StyledButton } from '../components/Buttons/Button';

import { currencyFormatter } from '../utils/currencyFormatter';

const StyledPreviewImage = styled.img`
  width: ${rem(40)};
  height: ${rem(40)};
  border-radius: 50%;
  object-fit: contain;
`;

type Props = {
  images?: readonly string[] | null | undefined;
  name: string;
  description: string;
  quantity: number;
  totalPrice: number;
};

export const OrderItem: FC<Props> = (props) => {
  return (
    <Box
      display={'flex'}
      flexDirection={'row'}
      alignItems={'center'}
      justifyContent={'space-between'}
    >
      <Box
        display={'flex'}
        flexDirection={'row'}
        alignItems={'center'}
      >
        {props.images && (
          <StyledPreviewImage src={props.images[0]} alt={'Preview'} />
        )}

        <Subtitle2 ml={rem(16)} width={rem(250)}>
          {props.name}
        </Subtitle2>
      </Box>
      <Mini width={rem(250)}>{`${props.description.substring(0, 25)}${
        props.description.length >= 25 ? '...' : ''
      }`}</Mini>
      <StyledButton variant={'secondary'} paddingSize={'small'}>
        <Subtitle2>{`${props.quantity} товар`}</Subtitle2>
      </StyledButton>
      <Subtitle2 color={baseTheme.primary}>
        {currencyFormatter(
          'ru',
          parseFloat(props.totalPrice.toString()),
        )}
      </Subtitle2>
    </Box>
  );
};
