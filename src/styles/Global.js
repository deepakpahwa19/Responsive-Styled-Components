import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`

  @import url('https://fonts.googleapis.com/css?family=Open+Sans|Source+Sans+Pro&display=swap');

  *,
  *::after,
  *::before {
    margin: 0px;
    padding: 0px;
    box-sizing: inherit;
  }

  html {
    font-size: 85%;
  }

  body {
    box-sizing: border-box;
    line-height: 2em;
    /* font-family: */
    font-family: 'Source Sans Pro';
    letter-spacing: 1.4px;
  }
`;

export default GlobalStyles;