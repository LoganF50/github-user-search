import styled from "styled-components";

const Wrapper = styled.div`
  color: ${({ theme }) => theme.color.text.primary};

  svg {
  }
`;

const StyledLink = styled.a<StyledLinkProps>`
  &:link,
  &:visited {
    color: ${({ theme }) => theme.color.text.primary};
    text-decoration: none;
    pointer-events: ${({ noLink }) => (noLink ? "none" : "")};
  }

  &:hover,
  &:active {
    text-decoration: underline;
  }
`;

type StyledLinkProps = {
  noLink: boolean;
  disabled: boolean;
};

type LinkProps = {
  img: React.ReactNode;
  link?: string | null;
  text?: string | null;
};

export const Link: React.FC<LinkProps> = ({ img, link, text }: LinkProps) => {
  return (
    <Wrapper>
      {img}
      <StyledLink
        href={link ? link : "#"}
        noLink={link === null || link === undefined}
        disabled={text === null || text === undefined}
      >
        {text ? text : "Not Available"}
      </StyledLink>
    </Wrapper>
  );
};
