import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  
  
  :root {
  --theme: #191C23;
  --text: #efefef;
  }
  
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
    color: var(--text);
    background-color: var(--theme);
  }
  
  a {
    color: var(--text);
    text-decoration: none;
  }
  
  ul {
    padding: 0;
    margin: 0;
  }
    
  li {
    list-style: none;
  }
`;

export default GlobalStyle;
