import React from 'react';
import styled from 'styled-components';
import useModal from '../hooks/useModal';
import {
  FilterButton,
  StyledFilterButton,
} from '../components/Buttons/FilterButton';
import { baseTheme } from '../styles/config';
import { Box } from '../components/Box';
import { rem } from 'polished';
import { H2, Normal } from '../styles/globalFontStyles';
import { CloseIcon } from '../assets/Icons/CloseIcon';
import { StyledButton } from '../components/Buttons/Button';
import { StyledLine } from '../components/StyledLine';
import { StyledModalLeftSide } from './ModalStyles';

const StyledFiltersWrapper = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  gap: ${rem(10)};
  padding-top: ${rem(12)};
`;
export const FilterModal = () => {
  const { handleClose, handleOpen, open } = useModal();

  return (
    <>
      <FilterButton onClick={handleOpen} />
      <StyledModalLeftSide
        isOpen={open}
        onRequestClose={handleClose}
        contentLabel='Example Modal'
      >
        <Box
          display={'flex'}
          flexDirection={'column'}
          width={'100%'}
          height={'100%'}
          overflow={'auto'}
          pt={rem(32)}
          pl={rem(20)}
          pb={rem(20)}
          pr={rem(20)}
        >
          <Box
            display={'flex'}
            flexDirection={'row'}
            width={'100%'}
            alignItems={'flex-end'}
            justifyContent={'space-between'}
          >
            <H2>Фильтры</H2>
            <button onClick={handleClose}>
              <CloseIcon />
            </button>
          </Box>
          <Box display={'flex'} flexDirection={'column'} pt={rem(20)}>
            <Normal color={baseTheme.grayText} display={'block'}>
              Общее
            </Normal>
            <StyledFiltersWrapper>
              <StyledButton paddingSize={'small'}>Хит</StyledButton>
              <StyledFilterButton>Новинка</StyledFilterButton>
              <StyledFilterButton>Новинка</StyledFilterButton>
              <StyledFilterButton>Новинка</StyledFilterButton>
              <StyledFilterButton>Новинка</StyledFilterButton>
              <StyledFilterButton>Новинка</StyledFilterButton>
              <StyledFilterButton>Новинка</StyledFilterButton>
              <StyledFilterButton>Новинка</StyledFilterButton>
              <StyledFilterButton>Новинка</StyledFilterButton>
              <StyledFilterButton>Новинка</StyledFilterButton>
              <StyledFilterButton>Новинка</StyledFilterButton>
              <StyledFilterButton>Новинка</StyledFilterButton>
              <StyledFilterButton>Новинка</StyledFilterButton>
            </StyledFiltersWrapper>
          </Box>
          <Box display={'flex'} flexDirection={'column'} pt={rem(20)}>
            <Normal color={baseTheme.grayText} display={'block'}>
              Общее
            </Normal>
            <StyledFiltersWrapper>
              <StyledButton paddingSize={'small'}>Хит</StyledButton>
              <StyledFilterButton>Новинка</StyledFilterButton>
              <StyledFilterButton>Новинка</StyledFilterButton>
              <StyledFilterButton>Новинка</StyledFilterButton>
              <StyledFilterButton>Новинка</StyledFilterButton>
              <StyledFilterButton>Новинка</StyledFilterButton>
              <StyledFilterButton>Новинка</StyledFilterButton>
              <StyledFilterButton>Новинка</StyledFilterButton>
              <StyledFilterButton>Новинка</StyledFilterButton>
              <StyledFilterButton>Новинка</StyledFilterButton>
              <StyledFilterButton>Новинка</StyledFilterButton>
              <StyledFilterButton>Новинка</StyledFilterButton>
              <StyledFilterButton>Новинка</StyledFilterButton>
            </StyledFiltersWrapper>
          </Box>
          <Box display={'flex'} flexDirection={'column'} pt={rem(20)}>
            <Normal color={baseTheme.grayText} display={'block'}>
              Общее
            </Normal>
            <StyledFiltersWrapper>
              <StyledButton paddingSize={'small'}>Хит</StyledButton>
              <StyledFilterButton>Новинка</StyledFilterButton>
              <StyledFilterButton>Новинка</StyledFilterButton>
              <StyledFilterButton>Новинка</StyledFilterButton>
              <StyledFilterButton>Новинка</StyledFilterButton>
              <StyledFilterButton>Новинка</StyledFilterButton>
              <StyledFilterButton>Новинка</StyledFilterButton>
              <StyledFilterButton>Новинка</StyledFilterButton>
              <StyledFilterButton>Новинка</StyledFilterButton>
              <StyledFilterButton>Новинка</StyledFilterButton>
              <StyledFilterButton>Новинка</StyledFilterButton>
              <StyledFilterButton>Новинка</StyledFilterButton>
              <StyledFilterButton>Новинка</StyledFilterButton>
            </StyledFiltersWrapper>
          </Box>
          <Box display={'flex'} flexDirection={'column'} pt={rem(20)}>
            <Normal color={baseTheme.grayText} display={'block'}>
              Общее
            </Normal>
            <StyledFiltersWrapper>
              <StyledButton paddingSize={'small'}>Хит</StyledButton>
              <StyledFilterButton>Новинка</StyledFilterButton>
              <StyledFilterButton>Новинка</StyledFilterButton>
              <StyledFilterButton>Новинка</StyledFilterButton>
              <StyledFilterButton>Новинка</StyledFilterButton>
              <StyledFilterButton>Новинка</StyledFilterButton>
              <StyledFilterButton>Новинка</StyledFilterButton>
              <StyledFilterButton>Новинка</StyledFilterButton>
              <StyledFilterButton>Новинка</StyledFilterButton>
              <StyledFilterButton>Новинка</StyledFilterButton>
              <StyledFilterButton>Новинка</StyledFilterButton>
              <StyledFilterButton>Новинка</StyledFilterButton>
              <StyledFilterButton>Новинка</StyledFilterButton>
            </StyledFiltersWrapper>
          </Box>
        </Box>
        <StyledLine width={'100%'} />
        <Box
          display={'flex'}
          flexDirection={'row'}
          justifyContent={'space-between'}
          alignItems={'center'}
          width={'100%'}
          pt={rem(10)}
          pb={rem(12)}
          pr={rem(20)}
          pl={rem(20)}
        >
          <StyledButton variant={'outline'}>Сбросить</StyledButton>
          <StyledButton>Применить</StyledButton>
        </Box>
      </StyledModalLeftSide>
    </>
  );
};
