import { css } from 'styled-components';
import InterRegularWoff2 from './Inter/Inter-Regular/Inter-Regular.woff2';
import InterRegularWoff from './Inter/Inter-Regular/Inter-Regular.woff';
import InterRegularTtf from './Inter/Inter-Regular/Inter-Regular.ttf';
import InterSemiBoldWoff2 from './Inter/Inter-SemiBold/Inter-SemiBold.woff2';
import InterSemiBoldWoff from './Inter/Inter-SemiBold/Inter-SemiBold.woff';
import InterSemiBoldTtf from './Inter/Inter-SemiBold/Inter-SemiBold.ttf';
import InterThinWoff2 from './Inter/Inter-Thin/Inter-Thin.woff2';
import InterThinWoff from './Inter/Inter-Thin/Inter-Thin.woff';
import InterThinTtf from './Inter/Inter-Thin/Inter-Thin.ttf';

export const fonts = css`
  @font-face {
    font-family: 'Inter';
    src: local('Inter Regular'), local('Inter-Regular'),
      url(${InterRegularWoff2}) format('woff2'),
      url(${InterRegularWoff}) format('woff'),
      url(${InterRegularTtf}) format('truetype');
    font-weight: 400;
    font-style: normal;
    font-display: swap;
  }
  @font-face {
    font-family: 'Inter';
    src: local('Inter SemiBold'), local('Inter-SemiBold'),
      url(${InterSemiBoldWoff2}) format('woff2'),
      url(${InterSemiBoldWoff}) format('woff'),
      url(${InterSemiBoldTtf}) format('truetype');
    font-weight: 600;
    font-style: normal;
    font-display: swap;
  }
  @font-face {
    font-family: 'Inter';
    src: local('Inter Thin'), local('Inter-Thin'),
      url(${InterThinWoff2}) format('woff2'),
      url(${InterThinWoff}) format('woff'),
      url(${InterThinTtf}) format('truetype');
    font-weight: 100;
    font-style: normal;
    font-display: swap;
  }
`;
