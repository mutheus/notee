import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  /**:not(path):not(g) {    color:                    hsla(210, 100%, 100%, 0.9) !important;    background:               hsla(210, 100%,  50%, 0.5) !important;    outline:    solid 0.25rem hsla(210, 100%, 100%, 0.5) !important;
    box-shadow: none !important;}*/
  
  :root {
  --theme: #252525;
  --text: #FAFAFA;
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
`;

export default GlobalStyle;
