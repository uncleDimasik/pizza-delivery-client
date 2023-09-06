import React from 'react';
import { Box } from '../components/Box';
import { Mini } from '../styles/globalFontStyles';
import styled from 'styled-components';
import { rem } from 'polished';
import { secondary } from '../styles/config';
import { Container } from '../styles/global';
import { StyledLine } from '../components/StyledLine';
import { Header } from './Header';
import { AuthButton } from '../components/AuthButton';
import { authModalSlice } from '../store/redusers/authModal/authModal.slice';
import { useAppDispatch } from '../hooks/useTypedRedux';
import { ThemeSwitcher } from '../components/ThemeSwitcher';

const StyledHeaderHome = styled.header`
  display: flex;
  flex-direction: column;
  justify-content: stretch;
  background-color: ${secondary};
  padding: ${rem(10)} 0;
`;

export const HeaderHome = () => {
  const { openAuthModal } = authModalSlice.actions;
  const dispatch = useAppDispatch();
  return (
    <StyledHeaderHome>
      <Box>
        <Container>
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
              {/*  <Box*/}
              {/*    display={'flex'}*/}
              {/*    flexDirection={'row'}*/}
              {/*    alignItems={'center'}*/}
              {/*  >*/}
              {/*    <AddressIcon />*/}
              {/*    <Mini pr={rem(8)} pl={rem(8)}>*/}
              {/*      Москва*/}
              {/*    </Mini>*/}
              {/*    <ArrowDownIcon />*/}
              {/*  </Box>*/}
              {/*  <Mini mr={rem(40)} ml={rem(40)}>*/}
              {/*    Проверить адрес*/}
              {/*  </Mini>*/}
              {/*  <Mini display={'flex'}>*/}
              {/*    Среднее время доставки*:&nbsp;*/}
              {/*    <MiniBold>00:24:19</MiniBold>*/}
              {/*  </Mini>*/}
            </Box>
            <Box
              display={'flex'}
              flexDirection={'row'}
              alignItems={'center'}
            >
              {/* <Mini>Время работы: с 11:00 до 23:00</Mini> */}
              <Box>
                <ThemeSwitcher />
              </Box>
              <AuthButton onClick={() => dispatch(openAuthModal())} />
              {/* <AuthModal myButton={AuthButton} /> */}
            </Box>
          </Box>
        </Container>
        <StyledLine mt={rem(12)} mb={rem(12)} />
        <Header />
      </Box>
    </StyledHeaderHome>
  );
};
