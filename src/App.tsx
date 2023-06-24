import styled, { ThemeProvider } from "styled-components";
import { GlobalStyle } from "./styles/globalStyle";
import { Themes } from "./styles/themes";
import { useState } from "react";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;

  @media screen and (min-width: ${({ theme }) => theme.breakpoint.tablet}) {
  }
`;

const StyledApp = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;

  @media screen and (min-width: ${({ theme }) => theme.breakpoint.tablet}) {
    max-width: 1200px;
  }
`;

function App() {
  const [currentTheme, setCurrentTheme] = useState(Themes.dark);

  const toggleTheme = () => {
    currentTheme.name === "dark"
      ? setCurrentTheme(Themes.light)
      : setCurrentTheme(Themes.dark);
  };

  return (
    <>
      <ThemeProvider theme={currentTheme}>
        <GlobalStyle />
        <Wrapper>
          <StyledApp>
            <h1>Template: Vite React TS</h1>
            <button onClick={toggleTheme}>Theme Toggle</button>
          </StyledApp>
        </Wrapper>
      </ThemeProvider>
    </>
  );
}

export default App;
