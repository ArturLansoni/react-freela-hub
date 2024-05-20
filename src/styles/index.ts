import styled, { createGlobalStyle } from "styled-components";

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

  a {
    text-decoration: none;
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

const Title = styled.h1`
  font-family: "Danfo", serif;
  text-align: center;
  font-weight: bold;
  font-size: 52px;
  background-image: linear-gradient(
    90deg,
    var(--primary) 0%,
    var(--secondary) 100%
  );
  color: transparent;
  background-clip: text;
  margin-top: 2rem;
`;

const Spacer = styled.div`
  width: 100%;
`;

const Row = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

export { GlobalStyles, Title, Spacer, Row };
