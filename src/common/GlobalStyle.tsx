import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
    font-family: 'Noto Sans KR', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif;
  }
  a {
    text-decoration: none;
  }
  input {
    outline: none;

    &:active,
    &:focus {
      outline: none;
    }
  }
`;
