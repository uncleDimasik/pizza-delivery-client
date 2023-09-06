import React from 'react';
import { Box } from '../components/Box';
import { rem } from 'polished';
import { H4, Normal } from '../styles/globalFontStyles';
import { Container, FooterWrapper } from '../styles/global';
import { LogoIcon } from '../assets/Icons/LogoIcon';
import styled from 'styled-components';
import { color, secondary } from '../styles/config';
import { PhoneIcon } from '../assets/Icons/PhoneIcon';
import { AddressIcon } from '../assets/Icons/AddressIcon';
import { FacebookIcon } from '../assets/Icons/FacebookIcon';
import { InstagramIcon } from '../assets/Icons/InstagramIcon';

const StyledFooterWrapper = styled(FooterWrapper)`
  background-color: ${secondary};
`;
const StyledFooterColumnBody = styled.div`
  & > * + * {
    margin-top: ${rem(20)};
  }
`;
const StyledLink = styled.a`
  color: ${color};
`;
// TODO: i18n
// TODO: Make links clickable
export const Footer = () => {
  return (
    <StyledFooterWrapper>
      <Container>
        <Box
          pt={rem(32)}
          pb={rem(32)}
          display={'flex'}
          alignItems={'stretch'}
          justifyContent={'space-between'}
        >
          <Box
            display={'flex'}
            flexDirection={'column'}
            justifyContent={'space-between'}
          >
            <Box pb={rem(22)}>
              <LogoIcon />
            </Box>
            <Normal>© Copyright 2021 — Куда Пицца</Normal>
          </Box>
          <Box display={'flex'} flexDirection={'column'}>
            <H4 pb={rem(22)}>Куда пицца</H4>
            <StyledFooterColumnBody>
              <Normal>О компании</Normal>
              <Normal>Пользовательское соглашение</Normal>
              <Normal>Условия гарантии</Normal>
            </StyledFooterColumnBody>
          </Box>
          <Box display={'flex'} flexDirection={'column'}>
            <H4 pb={rem(22)}>Помощь</H4>
            <StyledFooterColumnBody>
              <Normal>Ресторан</Normal>
              <Normal>Контакты</Normal>
              <Normal>Поддержка</Normal>
              <Normal>Отследить заказ</Normal>
            </StyledFooterColumnBody>
          </Box>
          <Box display={'flex'} flexDirection={'column'}>
            <H4 pb={rem(22)}>Контакты</H4>
            <StyledFooterColumnBody>
              <Box display={'flex'}>
                <Box mr={rem(12)}>
                  <PhoneIcon />
                </Box>
                <StyledLink href='tel:+79262231011'>
                  <Normal>+7 (926) 223-10-11</Normal>
                </StyledLink>
              </Box>
              <Box display={'flex'}>
                <Box mr={rem(12)}>
                  <AddressIcon />
                </Box>
                <Normal>Москва, ул. Юных Ленинцев, д.99</Normal>
              </Box>
              <Box display={'flex'}>
                <Box display={'flex'} mr={rem(23)}>
                  <Box mr={rem(12)}>
                    <FacebookIcon />
                  </Box>
                  <StyledLink href='https://www.facebook.com'>
                    <Normal>Facebook</Normal>
                  </StyledLink>
                </Box>
                <Box display={'flex'}>
                  <Box mr={rem(12)}>
                    <InstagramIcon />
                  </Box>
                  <StyledLink href='https://www.instagram.com'>
                    <Normal>Instagram</Normal>
                  </StyledLink>
                </Box>
              </Box>
            </StyledFooterColumnBody>
          </Box>
        </Box>
      </Container>
    </StyledFooterWrapper>
  );
};
