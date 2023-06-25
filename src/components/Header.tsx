import styled from "styled-components";

const StyledHeader = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: ${({ theme }) => theme.color.text.header};
  font-size: ${({ theme }) => theme.fontSize.base200};
  padding: ${({ theme }) => `${theme.spacing.base800} 0`};

  button {
    display: flex;
    align-items: center;
    gap: ${({ theme }) => theme.spacing.base300};
    background-color: transparent;
    border: none;
    color: ${({ theme }) => theme.color.text.toggle};
    font-weight: ${({ theme }) => theme.fontWeight.bold};

    &:hover {
      cursor: pointer;
      color: ${({ theme }) => theme.color.text.toggleHover};
    }
  }

  span {
    text-transform: uppercase;
    letter-spacing: 0.2rem;
  }
`;

type HeaderProps = {
  themeIcon: React.ReactNode;
  themeText: string;
  handleThemeChange: () => void;
};

export const Header: React.FC<HeaderProps> = ({
  themeIcon,
  themeText,
  handleThemeChange,
}: HeaderProps) => {
  return (
    <StyledHeader>
      <h1>devfinder</h1>
      <button onClick={handleThemeChange}>
        <span>{themeText}</span>
        {themeIcon}
      </button>
    </StyledHeader>
  );
};
