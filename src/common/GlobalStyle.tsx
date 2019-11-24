import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  a {
    text-decoration: none;
  }
  input {
    &:active,
    &:focus {
      outline: none;
    }
  }
`;
