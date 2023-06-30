import styled, { ThemeProvider } from "styled-components";
import { GlobalStyle } from "./styles/globalStyle";
import { Themes } from "./styles/themes";
import { useEffect, useState } from "react";
import { Header } from "./components/Header";
import {
  CompanyIcon,
  LocationIcon,
  MoonIcon,
  SunIcon,
  TwitterIcon,
  WebsiteIcon,
} from "./components/Icons";
import { Search } from "./components/Search";
import { CardLayout } from "./components/CardLayout";
import { Link } from "./components/Link";
import { Avatar } from "./components/Avatar";

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
  gap: ${({ theme }) => theme.spacing.base500};
  min-height: 100vh;
  color: ${({ theme }) => theme.color.text};
  font-family: ${({ theme }) => theme.fontFamily.primary};
  font-weight: ${({ theme }) => theme.fontWeight.normal};
  padding: ${({ theme }) => `0 ${theme.spacing.base600}`};
  width: min(450px, 100%);

  @media screen and (min-width: ${({ theme }) => theme.breakpoint.tablet}) {
    justify-content: center;
    width: min(600px, 100%);
  }
`;

const Error = styled.div`
  color: ${({ theme }) => theme.color.error};
  margin-left: auto;
`;

type UserData = {
  avatarURL: string;
  name: string | null;
  username: string;
  createdAt: Date;
  bio: string | null;
  repoCount: number;
  followerCount: number;
  followingCount: number;
  location: string | null;
  website: string | null;
  twitter: string | null;
  company: string | null;
};

const baseURL = "https://api.github.com/users/";

function App() {
  const [currentTheme, setCurrentTheme] = useState(Themes.dark);
  const [userSearch, setUserSearch] = useState("");
  const [hasError, setHasError] = useState(false);
  const [userData, setUserData] = useState<UserData>();

  const toggleTheme = () => {
    currentTheme.name === "dark"
      ? setCurrentTheme(Themes.light)
      : setCurrentTheme(Themes.dark);
  };

  //TODO
  const getUserDataFromJSON = (data: any) => {
    const returnData: UserData = {
      avatarURL: data.avatar_url,
      name: data.name,
      username: data.login,
      createdAt: new Date(data.created_at),
      bio: data.bio,
      repoCount: data.public_repos,
      followerCount: data.followers,
      followingCount: data.following,
      location: data.location,
      website: data.blog === "" ? null : data.blog,
      twitter: data.twitter_username,
      company: data.company,
    };
    console.log(returnData);
    return returnData;
  };

  //TODO
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    handleUserSearch(userSearch);
  };

  const handleUserSearch = async (username: string) => {
    const response = await fetch(`${baseURL}${username}`);
    const data = await response.json();
    if (response.ok) {
      setUserData(getUserDataFromJSON(data));
    } else {
      setHasError(true);
    }
  };

  useEffect(() => {
    handleUserSearch("octocat");
  }, []);

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
            {hasError && <Error>No Results</Error>}
            <Search
              value={userSearch}
              handleSearchUser={handleSubmit}
              onChange={(e) => {
                setUserSearch(e.target.value);
                setHasError(false);
              }}
              hasError={hasError}
            />
            {userData && (
              <CardLayout
                avatar={<Avatar src={userData.avatarURL} />}
                name={userData.name}
                username={userData.username}
                createdAt={userData.createdAt}
                bio={userData.bio}
                repoCount={userData.repoCount}
                followerCount={userData.followerCount}
                followingCount={userData.followingCount}
                links={[
                  { img: <LocationIcon />, text: userData.location },
                  {
                    img: <WebsiteIcon />,
                    link: userData.website,
                    text: userData.website,
                  },
                  {
                    img: <TwitterIcon />,
                    link: userData.twitter,
                    text: userData.twitter,
                  },
                  {
                    img: <CompanyIcon />,
                    link: userData.company
                      ? `https://github.com/${userData.company.substring(1)}`
                      : null,
                    text: userData.company,
                  },
                ]}
              />
            )}
          </StyledApp>
        </Wrapper>
      </ThemeProvider>
    </>
  );
}

export default App;
