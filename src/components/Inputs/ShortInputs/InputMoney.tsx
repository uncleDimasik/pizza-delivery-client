import React, { useState } from 'react';
import { box, Box, BoxProps } from '../../Box';
import styled from 'styled-components';
import { baseTheme, typography } from '../../../styles/config';
import { rem } from 'polished';
import { InputProps, StyledInputBase } from '../InputField';
import CurrencyInput, {
  CurrencyInputProps,
} from 'react-currency-input-field';
import { BaseInputProps } from '../InputBase';

const CurrencyWrapper = styled.span`
  position: absolute;
  right: ${rem(14)};
  color: ${baseTheme.grayText};
  ${typography.desktop.normal};
`;

const StyledCurrencyInput = styled(CurrencyInput)<
  BoxProps & InputProps & BaseInputProps
>`
  ${StyledInputBase}
  ${box}
`;

export const InputMoney = () => {
  const limit = 1000;
  const [error, setError] = useState(false);

  const handleOnValueChange: CurrencyInputProps['onValueChange'] = (
    value,
  ): void => {
    if (!value) {
      return;
    }

    if (Number.isNaN(Number(value))) {
      setError(true);
      return;
    }

    if (Number(value) > limit) {
      setError(true);
      return;
    }
    setError(false);
  };

  return (
    <Box display={'flex'} alignItems={'center'} position={'relative'}>
      <StyledCurrencyInput
        id='input-example'
        $isError={error}
        onValueChange={handleOnValueChange}
        name='input-name'
        placeholder='Please enter a number'
        defaultValue={0}
        maxLength={8}
        pr={rem(15)}
        width={'100%'}
      />
      <CurrencyWrapper>₽</CurrencyWrapper>
    </Box>
  );
};
