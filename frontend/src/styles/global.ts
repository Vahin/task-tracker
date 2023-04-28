import { createGlobalStyle } from "styled-components";
import { getTransition } from "./utils";

export default createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    width: 100%;
    min-height: 100vh;
    overflow-x: hidden;
    background-color: ${({ theme }) => theme.colors.bg};
    color: ${({ theme }) => theme.colors.font};
    
    ${({ theme }) => getTransition(theme.durations.ms300)}

    font-family: sans-serif;

    --burger-size: 20px;
  }
  
  #root {
    width: 100%;
    min-height: 100vh;
  }

  
  `;
