import styled from "styled-components";

const Wrapper = styled.div<{ unavailable: boolean }>`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.base400};
  color: ${({ unavailable, theme }) =>
    unavailable ? theme.color.link.unavailable : theme.color.link.text};

  svg {
    width: 1.5rem;
  }
`;

const StyledLink = styled.a<StyledLinkProps>`
  &:link,
  &:visited {
    color: ${({ unavailable, theme }) =>
      unavailable ? theme.color.link.unavailable : theme.color.link.text};
    text-decoration: none;
    pointer-events: ${({ noLink }) => (noLink ? "none" : "")};
  }

  &:hover,
  &:active {
    text-decoration: ${({ unavailable }) =>
      unavailable ? "none" : "underline"};
  }
`;

type StyledLinkProps = {
  noLink: boolean;
  unavailable: boolean;
};

type LinkProps = {
  img: React.ReactNode;
  link?: string | null;
  text?: string | null;
};

export const Link: React.FC<LinkProps> = ({ img, link, text }: LinkProps) => {
  const noLink = link === null || link === undefined;
  const unavailable = text === null || text === undefined;

  return (
    <Wrapper unavailable={unavailable}>
      {img}
      <StyledLink
        href={link ? link : "#"}
        noLink={noLink}
        unavailable={unavailable}
      >
        {text ? text : "Not Available"}
      </StyledLink>
    </Wrapper>
  );
};
