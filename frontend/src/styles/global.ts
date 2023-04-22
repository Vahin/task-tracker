import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    width: 100%;
    min-height: 100vh;
    overflow: hidden;
  }
  
  #root {
    width: 100%;
    min-height: 100vh;
  }
  `;
