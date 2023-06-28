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
  min-width: 100%;
  padding: ${({ theme }) => `0 ${theme.spacing.base600}`};

  @media screen and (min-width: ${({ theme }) => theme.breakpoint.tablet}) {
    max-width: 1200px;
  }
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

const tmpData: UserData = {
  avatarURL: "https://avatars.githubusercontent.com/u/583231?v=4",
  name: "The Octocat",
  username: "octocat",
  createdAt: new Date(2011, 0, 25),
  bio: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec odio. Quisque volutpat mattis eros.",
  repoCount: 8,
  followerCount: 3938,
  followingCount: 9,
  location: "San Francisco",
  website: "https://github.blog",
  twitter: null,
  company: "@github",
};

function App() {
  const [currentTheme, setCurrentTheme] = useState(Themes.dark);
  const [userSearch, setUserSearch] = useState("");
  const [hasError, setHasError] = useState(false);
  const [userData, setUserData] = useState<UserData>(tmpData);

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
      website: data.blog,
      twitter: data.twitter_username,
      company: data.company,
    };

    return returnData;
  };

  //TODO
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    handleUserSearch(userSearch);
  };

  //TODO
  const handleUserSearch = (username: string) => {
    if (userSearch.length > 1) {
      fetch(`https://api.github.com/users/${username}`)
        .then((response) => response.json())
        .then((json) => setUserData(getUserDataFromJSON(json)))
        .catch((json) => {
          setHasError(true);
        });
    }
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
              value={userSearch}
              handleSearchUser={handleSubmit}
              onChange={(e) => {
                setUserSearch(e.target.value);
                setHasError(false);
              }}
              hasError={hasError}
            />
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
          </StyledApp>
        </Wrapper>
      </ThemeProvider>
    </>
  );
}

export default App;
