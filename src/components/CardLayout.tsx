import styled from "styled-components";
import { Link } from "./Link";

const StyledCardLayout = styled.div`
  display: grid;
  grid-template-areas:
    "avatar info"
    "bio bio"
    "data data"
    "links links";
  grid-template-columns: max-content 1fr;
  column-gap: ${({ theme }) => theme.spacing.base600};
  row-gap: ${({ theme }) => theme.spacing.base700};
  background-color: ${({ theme }) => theme.color.background.primary};
  border-radius: ${({ theme }) => theme.borderRadius.base400};
  box-shadow: ${({ theme }) => theme.boxShadow.primary};
  font-size: ${({ theme }) => theme.fontSize.base200};
  padding: ${({ theme }) =>
    `${theme.spacing.base800} ${theme.spacing.base700}`};

  @media screen and (min-width: ${({ theme }) => theme.breakpoint.tablet}) {
    font-size: ${({ theme }) => theme.fontSize.base300};
  }

  @media screen and (min-width: ${({ theme }) => theme.breakpoint.laptop}) {
    grid-template-areas:
      "avatar info"
      "avatar bio"
      "avatar data"
      "avatar links";
  }
`;

const AvatarContainer = styled.div`
  grid-area: avatar;
`;

const UserInfo = styled.div`
  grid-area: info;

  @media screen and (min-width: ${({ theme }) => theme.breakpoint.tablet}) {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: repeat(2, 1fr);
    grid-auto-flow: column;

    & :nth-child(3) {
      justify-self: end;
    }
  }
`;

const Name = styled.div`
  color: ${({ theme }) => theme.color.card.text};
  font-size: ${({ theme }) => theme.fontSize.base300};
  font-weight: ${({ theme }) => theme.fontWeight.bold};

  @media screen and (min-width: ${({ theme }) => theme.breakpoint.tablet}) {
    font-size: ${({ theme }) => theme.fontSize.base600};
  }
`;

const Username = styled.div`
  color: ${({ theme }) => theme.color.primary};
  padding: ${({ theme }) =>
    `${theme.spacing.base200} 0 ${theme.spacing.base400}`};

  @media screen and (min-width: ${({ theme }) => theme.breakpoint.tablet}) {
    padding: ${({ theme }) => `${theme.spacing.base400} 0`};
  }

  @media screen and (min-width: ${({ theme }) => theme.breakpoint.laptop}) {
    padding: ${({ theme }) => `${theme.spacing.base300} 0`};
  }
`;

const Bio = styled.div`
  grid-area: bio;
  line-height: 1.5rem;
`;

const Data = styled.div`
  grid-area: data;
  display: flex;
  justify-content: space-evenly;
  background-color: ${({ theme }) => theme.color.background.secondary};
  border-radius: ${({ theme }) => theme.borderRadius.base300};
  padding: ${({ theme }) => `${theme.spacing.base600} 0`};
`;

const DataColumn = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.base300};
`;

const DataHeader = styled.div`
  font-size: ${({ theme }) => theme.fontSize.base100};

  @media screen and (min-width: ${({ theme }) => theme.breakpoint.tablet}) {
    font-size: ${({ theme }) => theme.fontSize.base200};
  }
`;

const DataValue = styled.div`
  color: ${({ theme }) => theme.color.card.text};
  font-weight: ${({ theme }) => theme.fontWeight.bold};

  @media screen and (min-width: ${({ theme }) => theme.breakpoint.tablet}) {
    font-size: ${({ theme }) => theme.fontSize.base500};
  }
`;

const Links = styled.div`
  grid-area: links;
  display: grid;
  gap: ${({ theme }) => theme.spacing.base600};

  @media screen and (min-width: ${({ theme }) => theme.breakpoint.tablet}) {
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: repeat(2, 1fr);
    grid-auto-flow: column;
  }
`;

type LinkData = {
  img: React.ReactNode;
  link?: string | null;
  text?: string | null;
};

type CardLayoutProps = {
  avatar: React.ReactNode;
  name: string | null;
  username: string;
  createdAt: Date;
  bio: string | null;
  repoCount: number;
  followerCount: number;
  followingCount: number;
  links: LinkData[];
};

export const CardLayout: React.FC<CardLayoutProps> = ({
  avatar,
  name,
  username,
  createdAt,
  bio,
  repoCount,
  followerCount,
  followingCount,
  links,
}: CardLayoutProps) => {
  const formatDate = (date: Date) => {
    const months = [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ];
    const day = date.getDate();
    const month = date.getMonth();
    const year = date.getFullYear();

    return `${day} ${months[month]} ${year}`;
  };

  return (
    <StyledCardLayout>
      <AvatarContainer>{avatar}</AvatarContainer>
      <UserInfo>
        <Name>{name ? name : username}</Name>
        <Username>{`@${username}`}</Username>
        <div>{`Joined ${formatDate(createdAt)}`}</div>
      </UserInfo>
      <Bio>{bio ? bio : "This profile has no bio"}</Bio>
      <Data>
        <DataColumn>
          <DataHeader>Repos</DataHeader>
          <DataValue>{repoCount}</DataValue>
        </DataColumn>
        <DataColumn>
          <DataHeader>Followers</DataHeader>
          <DataValue>{followerCount}</DataValue>
        </DataColumn>
        <DataColumn>
          <DataHeader>Following</DataHeader>
          <DataValue>{followingCount}</DataValue>
        </DataColumn>
      </Data>
      <Links>
        {links.map((element, i) => {
          return (
            <Link
              key={i}
              img={element.img}
              link={element.link}
              text={element.text}
            />
          );
        })}
      </Links>
    </StyledCardLayout>
  );
};
