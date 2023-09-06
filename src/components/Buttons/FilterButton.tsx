import styled from 'styled-components';
import { rem } from 'polished';
import React, { FC } from 'react';
import { useTranslation } from 'react-i18next';
import { Box, box, BoxProps } from '../Box';
import { ButtonProps } from './Button';
import { borderRadius, typography } from '../../styles/config';
import { FilterIcon } from '../../assets/Icons/FilterIcon';
import { StyledWhiteOutlineWrapper } from '../StyledWhiteOutlineWrapper';

export const StyledFilterButton = styled.button<BoxProps>`
  margin: 0;
  border-radius: ${borderRadius.xs};
  padding: ${rem(8)} ${rem(15)};
  display: flex;
  justify-content: space-between;
  align-items: center;
  ${typography.desktop.normal}
  ${StyledWhiteOutlineWrapper}
  ${box}
`;

StyledFilterButton.defaultProps = {
  alignSelf: 'flex-start',
};

export const FilterButton: FC<ButtonProps> = ({ onClick }) => {
  const { t } = useTranslation();
  return (
    <StyledFilterButton onClick={onClick}>
      <FilterIcon />
      <Box pl={rem(8)}>{t('base.filter', 'Фильтры')}</Box>
    </StyledFilterButton>
  );
};
