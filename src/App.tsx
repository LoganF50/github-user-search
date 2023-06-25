import styled, { ThemeProvider } from "styled-components";
import { GlobalStyle } from "./styles/globalStyle";
import { Themes } from "./styles/themes";
import { useState } from "react";
import { Header } from "./components/Header";
import { MoonIcon, SunIcon } from "./components/Icons";
import { Search } from "./components/Search";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  align-items: center;
  background-color: ${({ theme }) => theme.color.background.secondary};

  @media screen and (min-width: ${({ theme }) => theme.breakpoint.tablet}) {
  }
`;

const StyledApp = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  color: ${({ theme }) => theme.color.text.primary};
  font-family: ${({ theme }) => theme.fontFamily.primary};
  font-weight: ${({ theme }) => theme.fontWeight.normal};
  min-width: 100%;
  padding: ${({ theme }) => `0 ${theme.spacing.base600}`};

  @media screen and (min-width: ${({ theme }) => theme.breakpoint.tablet}) {
    max-width: 1200px;
  }
`;

function App() {
  const [currentTheme, setCurrentTheme] = useState(Themes.dark);
  const [currentUser, setCurrentUser] = useState("");
  const [hasError, setHasError] = useState(false);

  const toggleTheme = () => {
    currentTheme.name === "dark"
      ? setCurrentTheme(Themes.light)
      : setCurrentTheme(Themes.dark);
  };

  //TODO
  const handleSearchUser = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };

  return (
    <>
      <ThemeProvider theme={currentTheme}>
        <GlobalStyle />
        <Wrapper>
          <StyledApp>
            <Header
              themeIcon={
                currentTheme.name === "dark" ? <SunIcon /> : <MoonIcon />
              }
              themeText={currentTheme.name === "dark" ? "light" : "dark"}
              handleThemeChange={toggleTheme}
            />
            <Search
              value={currentUser}
              handleSearchUser={handleSearchUser}
              onChange={(e) => setCurrentUser(e.target.value)}
              hasError={hasError}
            />
          </StyledApp>
        </Wrapper>
      </ThemeProvider>
    </>
  );
}

export default App;
