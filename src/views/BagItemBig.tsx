import React from 'react';
import styled from 'styled-components';
import { baseTheme, borderRadius } from '../styles/config';
import { StyledWhiteOutlineWrapper } from '../components/StyledWhiteOutlineWrapper';
import MockImage from '../assets/MockImage.png';
import { Box } from '../components/Box';
import { rem } from 'polished';
import { H4, Normal } from '../styles/globalFontStyles';
import { CounterButton } from '../components/Buttons/CounterButton';

const StyledBagItemBig = styled.div`
  border-radius: ${borderRadius.s};
  position: relative;
  display: flex;
  flex-direction: row;
  padding: ${rem(15)};
  ${StyledWhiteOutlineWrapper}
`;

export const BagItemBig = () => {
  return (
    <StyledBagItemBig>
      <Box width={rem(120)}>
        <img src={MockImage} alt={'Preview'} />
      </Box>
      <Box
        pl={rem(16)}
        display={'flex'}
        flex={'1 1 auto'}
        justifyContent={'space-between'}
      >
        <Box
          display={'flex'}
          justifyContent={'center'}
          flexDirection={'column'}
        >
          <H4>Пепперони по-деревенски</H4>
          <Normal pt={rem(8)}>Традиционное тесто, 23 см</Normal>
        </Box>
        <Box
          display={'flex'}
          flexDirection={'row'}
          pt={rem(12)}
          alignItems={'center'}
        >
          {/* <CounterButton*/}
          {/*  onChange={(value) => {*/}
          {/*    console.log(value);*/}
          {/*  }}*/}
          {/* />*/}
          <H4 pl={rem(40)} color={baseTheme.primary}>
            от 399р
          </H4>
        </Box>
      </Box>
    </StyledBagItemBig>
  );
};
