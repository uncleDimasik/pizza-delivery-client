import { css } from 'styled-components';

export const normalize = css`
  html {
    box-sizing: border-box;
    -moz-box-sizing: border-box;
    -webkit-box-sizing: border-box;
  }

  *,
  *::after,
  *::before {
    box-sizing: inherit;
  }

  ul[class],
  ol[class] {
    padding: 0;
  }

  body,
  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  p,
  ul,
  ol,
  li,
  figure,
  figcaption,
  blockquote,
  dl,
  dd {
    margin: 0;
  }

  ul[class] {
    list-style: none;
  }

  img {
    max-width: 100%;
    display: block;
  }

  input,
  button,
  textarea,
  select {
    //outline: none;//Accessibility app
    border: none;
    background-image: none;
    background-color: transparent;
    box-shadow: none;
    font: inherit;
  }

  button {
    border: none;
    cursor: pointer;
    color: inherit;
    background-color: inherit;
  }

  input::-webkit-outer-spin-button,
  input::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }

  /* Firefox */

  input[type='number'] {
    -moz-appearance: textfield;
  }

  select {
    // styles reset, including removing the default dropdown arrow
    appearance: none;
    -webkit-appearance: none;
    -moz-appearance: none;
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;

    &::-ms-expand {
      display: none;
    }

    box-sizing: border-box;
    background-color: transparent;
    border: none;
    padding: 0 0 0 0;
    margin: 0;
    font-family: inherit;
    font-size: inherit;
    cursor: inherit;
    line-height: inherit;
    // Stack above custom arrow
    z-index: 1;
    // Remove focus outline, will add on alternate element
    outline: none;
  }

  a {
    text-decoration: none;
    color: inherit;
  }
`;
