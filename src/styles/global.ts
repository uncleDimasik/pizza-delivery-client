import styled, { createGlobalStyle } from 'styled-components';
import { globalFontStyles } from './globalFontStyles';
import { normalize } from './normalize';
import { backgroundColor, color, container } from './config';

export const GlobalStyle = createGlobalStyle`
  ${normalize}
  ${globalFontStyles}
  html,
  body {
    height: 100%;
  }

  body {
    background-color: ${backgroundColor};
    color: ${color};
  }
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  min-width: 100%;
`;

export const Main = styled.main`
  flex: 1 0 auto;
`;

export const FooterWrapper = styled.footer`
  flex: 0 0 auto;
`;

export const Container = styled.div`
  max-width: ${container.container_width}px;
  margin: 0 auto;
  padding: 0 ${container.container_padding}px;
`;

export const ContainerSmall = styled.div`
  max-width: ${container.container_width_small}px;
  margin: 0 auto;
  padding: 0 ${container.container_padding}px;
`;
