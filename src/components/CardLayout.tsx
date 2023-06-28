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
  gap: ${({ theme }) => theme.spacing.base700};
  background-color: ${({ theme }) => theme.color.background.primary};
  border-radius: ${({ theme }) => theme.borderRadius.base400};
  padding: ${({ theme }) => theme.spacing.base700};
`;

const AvatarContainer = styled.div`
  grid-area: avatar;
`;

const UserInfo = styled.div`
  grid-area: info;
`;

const Bio = styled.div`
  grid-area: bio;
`;

const Data = styled.div`
  grid-area: data;
  display: flex;
  justify-content: space-around;
  background-color: ${({ theme }) => theme.color.background.secondary};
  border-radius: ${({ theme }) => theme.borderRadius.base400};
`;

const Links = styled.div`
  grid-area: links;
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
        <div>{name ? name : username.substring(1)}</div>
        <div>{username}</div>
        <div>{`Joined ${formatDate(createdAt)}`}</div>
      </UserInfo>
      <Bio>{bio ? bio : "This profile has no bio"}</Bio>
      <Data>
        <div>
          <div>Repos</div>
          <div>{repoCount}</div>
        </div>
        <div>
          <div>Followers</div>
          <div>{followerCount}</div>
        </div>
        <div>
          <div>Following</div>
          <div>{followingCount}</div>
        </div>
      </Data>
      <Links>
        {links.map((element) => {
          return (
            <Link img={element.img} link={element.link} text={element.text} />
          );
        })}
      </Links>
    </StyledCardLayout>
  );
};
