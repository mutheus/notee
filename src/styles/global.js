import { createGlobalStyle } from 'styled-components/macro';

const GlobalStyle = createGlobalStyle`
  html {
    font-size: 100%;
    font-family: 'Source Sans Pro', sans-serif;
    box-sizing: border-box;
  }
  
  *, *:before, *:after {
    box-sizing: inherit;
  }
  
  body {
    margin: 0;
    color: ${({ theme }) => theme.colors.text};
    background-color: ${({ theme }) => theme.colors.primary};
  }
  
  a {
    color: inherit;
    text-decoration: none;
  }
  
  ul {
    padding: 0;
    margin: 0;
  }
    
  li {
    list-style: none;
  }
  
  input[type="search"]::-webkit-search-decoration,
  input[type="search"]::-webkit-search-cancel-button,
  input[type="search"]::-webkit-search-results-button,
  input[type="search"]::-webkit-search-results-decoration {
    -webkit-appearance:none;
  }
`;

export default GlobalStyle;
