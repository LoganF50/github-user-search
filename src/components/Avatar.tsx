import styled from "styled-components";

const StyledAvatar = styled.img`
  border-radius: ${({ theme }) => theme.borderRadius.circular};
  height: 4.5rem;

  @media screen and (min-width: ${({ theme }) => theme.breakpoint.tablet}) {
    height: 7rem;
  }
`;

type AvatarProps = {
  src: string;
};

export const Avatar: React.FC<AvatarProps> = ({ src }: AvatarProps) => {
  return <StyledAvatar src={src} />;
};
