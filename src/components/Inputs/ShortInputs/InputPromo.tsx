import React from 'react';
import { StyledInput } from '../InputField';
import { rem } from 'polished';
import { StyledButton } from '../../Buttons/Button';
import { Box } from '../../Box';
import { SendIcon } from '../../../assets/Icons/SendIcon';

export const InputPromo = () => {
  return (
    <Box
      display={'flex'}
      alignItems={'center'}
      position={'relative'}
      width={'fit-content'}
    >
      <StyledInput
        placeholder={'Адрес'}
        label={'Адрес*'}
        pr={rem(55)}
        width={rem(310)}
      />
      <StyledButton
        p={rem(16)}
        minWidth={rem(48)}
        right={rem(0)}
        position={'absolute'}
      >
        <SendIcon />
      </StyledButton>
    </Box>
  );
};
