import { createGlobalStyle } from 'styled-components';

import githubBackground from '../assets/github-background.svg';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
    transition: all 0.2s linear;
  }

  body {
    background: ${(props) =>
      props.theme.colors.background} url(${githubBackground}) no-repeat 50% top;
    /* https://usabilitypost.com/2012/11/05/stop-fixing-font-smoothing/ */
    /* -webkit-font-smoothing: antialiased; */
  }

  body, input, button {
    font: 16px Roboto, sans-serif;
  }

  button {
    cursor: pointer;
  }

  #root {
    max-width: 960px;
    margin: 0 auto;
    padding: 40px 20px;
  }
`;
