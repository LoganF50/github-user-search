import styled from "styled-components";
import { SearchIcon } from "./Icons";

const StyledSearch = styled.form`
  display: flex;
  align-items: center;
  background-color: ${({ theme }) => theme.color.background.primary};
  border-radius: ${({ theme }) => theme.borderRadius.base400};
  font-size: ${({ theme }) => theme.fontSize.base200};
  padding: ${({ theme }) => theme.spacing.base300};

  div {
    padding: ${({ theme }) => theme.spacing.base200};
  }

  svg {
    transform: scale(0.8);
  }

  input {
    flex: 1 1 auto;
    background-color: transparent;
    color: ${({ theme }) => theme.color.text.input};
    border: none;
    caret-color: ${({ theme }) => theme.color.primary};
    outline: none;
    text-overflow: ellipsis;

    &::placeholder {
      color: ${({ theme }) => theme.color.text.primary};
      opacity: 1; //firefox
    }

    &:hover {
      cursor: pointer;
    }
  }

  button {
    background-color: ${({ theme }) => theme.color.background.button};
    color: ${({ theme }) => theme.color.text.button};
    border: none;
    border-radius: ${({ theme }) => theme.borderRadius.base300};
    font-weight: ${({ theme }) => theme.fontWeight.bold};
    padding: ${({ theme }) => theme.spacing.base500};

    &:hover {
      background-color: ${({ theme }) => theme.color.background.buttonHover};
      cursor: pointer;
    }

    &:active {
      transform: scale(0.9);
      transition-duration: 100ms;
    }

    &:disabled {
      background-color: ${({ theme }) => theme.color.background.buttonHover};
      cursor: default;
    }
  }
`;

type SearchProps = {
  hasError: boolean;
  value: string;
  handleSearchUser: (e: React.FormEvent<HTMLFormElement>) => void;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

export const Search: React.FC<SearchProps> = ({
  hasError,
  value,
  handleSearchUser,
  onChange,
}: SearchProps) => {
  return (
    <StyledSearch onSubmit={handleSearchUser}>
      <div>
        <SearchIcon />
      </div>
      <input
        type="text"
        name="search-user"
        id="search-user"
        value={value}
        onChange={onChange}
        placeholder="Search Github username"
      />
      <button type="submit" disabled={hasError}>
        Search
      </button>
    </StyledSearch>
  );
};
