import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
  * {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    font-family: 'Poppins', sans-serif;
    -webkit-font-smoothing: antialiased;
    font-size: 16px;
  }
  
  h1 {
    font-size: 1.6rem;
  }

  body {
    background: var(--background);
    color: var(--text);
  }

  button {
    cursor: pointer;
  }

  :root {
    --text: #FFFBFE;
    --background: #1C1B1F;
    --primary: rgba(94, 114, 235, 1);
    --secondary: rgba(255, 145, 144, 1);
    --tertiary: rgba(254, 193, 149, 1);
    --surface: #30363d;
  }
`;

export { GlobalStyles };
