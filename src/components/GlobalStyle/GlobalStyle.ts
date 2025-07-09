import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  body {
    background-color: ${({ theme }) => theme.colors.globalBackground};
    margin: 0;
    transition: background-color 0.3s ease;
  }
`;
