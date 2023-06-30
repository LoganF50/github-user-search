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
`;

const AvatarContainer = styled.div`
  grid-area: avatar;
`;

const UserInfo = styled.div`
  grid-area: info;
`;

const Name = styled.div`
  color: ${({ theme }) => theme.color.card.text};
  font-size: ${({ theme }) => theme.fontSize.base300};
  font-weight: ${({ theme }) => theme.fontWeight.bold};
`;

const Username = styled.div`
  color: ${({ theme }) => theme.color.primary};
  padding: ${({ theme }) =>
    `${theme.spacing.base200} 0 ${theme.spacing.base400}`};
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
`;

const DataValue = styled.div`
  color: ${({ theme }) => theme.color.card.text};
  font-weight: ${({ theme }) => theme.fontWeight.bold};
`;

const Links = styled.div`
  grid-area: links;
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing.base600};
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
