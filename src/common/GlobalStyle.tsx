import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
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
