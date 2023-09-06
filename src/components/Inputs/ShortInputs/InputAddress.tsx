import React from 'react';
import { StyledButton } from '../../Buttons/Button';
import { rem } from 'polished';
import { StyledInput } from '../InputField';
import { Box } from '../../Box';
import { SendIcon } from '../../../assets/Icons/SendIcon';
import { AddressIcon } from '../../../assets/Icons/AddressIcon';

export const InputAddress = () => {
  return (
    <Box
      display={'flex'}
      alignItems={'center'}
      position={'relative'}
      width={'fit-content'}
    >
      <Box left={rem(14)} position={'absolute'}>
        <AddressIcon />
      </Box>
      <StyledInput
        placeholder={'Адрес'}
        label={'Адрес*'}
        pl={rem(38)}
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
