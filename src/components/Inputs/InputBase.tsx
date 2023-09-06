import React, { FC, PropsWithChildren } from 'react';
import styled from 'styled-components';
import { Box } from '../Box';
import { baseTheme, typography } from '../../styles/config';
import { useTranslation } from 'react-i18next';
import { rem } from 'polished';

export type BaseInputProps = {
  label?: string;
  $isError?: boolean;
  $errorMassage?: string;
  id?: string;
  disabled?: boolean;
};

const StyledLabel = styled.label`
  color: ${baseTheme.grayText};
  padding-bottom: ${rem(8)};
  ${typography.desktop.mini};
`;

const StyledErrorText = styled.span`
  ${typography.desktop.normal};
  color: ${baseTheme.red};
`;

export const InputBase: FC<BaseInputProps & PropsWithChildren> = ({
  label,
  $isError,
  children,
  $errorMassage,
  id,
}) => {
  const { t } = useTranslation();
  return (
    <Box display={'flex'} flexDirection={'column'}>
      {label && <StyledLabel htmlFor={id}>{label}</StyledLabel>}
      {children}
      {$isError && (
        <Box alignSelf={'center'} pt={rem(21)}>
          <StyledErrorText>
            {$errorMassage ||
              t('base.inputError', 'Заполните это поле')}
          </StyledErrorText>
        </Box>
      )}
    </Box>
  );
};
