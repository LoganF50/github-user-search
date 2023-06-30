import styled from "styled-components";
import { SearchIcon } from "./Icons";
import { ChangeEventHandler, FormEventHandler } from "react";

const StyledSearch = styled.form`
  display: flex;
  align-items: center;
  background-color: ${({ theme }) => theme.color.background.primary};
  border-radius: ${({ theme }) => theme.borderRadius.base400};
  box-shadow: ${({ theme }) => theme.boxShadow.primary};
  font-size: ${({ theme }) => theme.fontSize.base200};
  padding: ${({ theme }) => theme.spacing.base300};

  div {
    padding: ${({ theme }) => theme.spacing.base200};
  }

  svg {
    transform: scale(0.8);
  }

  input {
    flex: 1 2 auto;
    background-color: transparent;
    color: ${({ theme }) => theme.color.input.text};
    border: none;
    caret-color: ${({ theme }) => theme.color.primary};
    min-width: 0;
    outline: none;

    &::placeholder {
      color: ${({ theme }) => theme.color.input.placeholder};
      opacity: 1; //firefox
    }

    &:hover {
      cursor: pointer;
    }
  }

  button {
    background-color: ${({ theme }) => theme.color.button.background};
    color: ${({ theme }) => theme.color.button.text};
    border: none;
    border-radius: ${({ theme }) => theme.borderRadius.base300};
    font-weight: ${({ theme }) => theme.fontWeight.bold};
    padding: ${({ theme }) => theme.spacing.base500};

    &:hover {
      background-color: ${({ theme }) => theme.color.button.backgroundHover};
      cursor: pointer;
    }

    &:active {
      transform: scale(0.9);
      transition-duration: ${({ theme }) => theme.duration.short};
    }

    &:disabled {
      background-color: ${({ theme }) => theme.color.button.backgroundHover};
      cursor: default;
    }
  }
`;

const Error = styled.div`
  color: ${({ theme }) => theme.color.error};
`;

type SearchProps = {
  hasError: boolean;
  value: string;
  handleSearchUser: FormEventHandler;
  onChange: ChangeEventHandler<HTMLInputElement>;
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
        placeholder="Search Github username..."
      />
      {hasError && <Error>No Results</Error>}
      <button type="submit" disabled={hasError}>
        Search
      </button>
    </StyledSearch>
  );
};
