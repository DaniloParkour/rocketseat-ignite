import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  :root {
    --background: #f0f2f5;
    --red: #e52e4d;
    --blue: #5429cc;
    --blue-light: #6933ff;
    --text-title: #363f5f;
    --text-body: #969cb3;
    --shape: #fff;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  // font-size: 6px (OK for Desktop)
  html {

    // REM: 1rem = font-size
    // Use percent for font-size because configurations like accessibility can
    // modify default font-size to great values

    @media (max-width: 1000px) {
      font-size: 93.75%;
    }

    @media (max-width: 720px) {
      font-size: 87.5%;
    }

  }

  body: {
    background: var(--background);
    -webkit-font-smoothing: antialiased;
  }

  button {
    cursor: pointer;
  }

  //All disable elements
  [disabled] {
    opacity: 0.6;
    cursor: not-allowed;
  }
  
`;