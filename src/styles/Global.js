import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`

  /* @import url('https://fonts.googleapis.com/css?family=Montserrat:400,600&display=swap');; */
  /* @import url('https://fonts.googleapis.com/css?family=Open+Sans|Source+Sans+Pro&display=swap'); */
  @import url('https://fonts.googleapis.com/css?family=Open+Sans&display=swap');

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
    font-family: 'Montserrat', sans-serif;
  }
`;

export default GlobalStyles;