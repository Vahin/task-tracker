import styled from "styled-components";
import Select from "react-select";
import { getTransition } from "../../../styles/utils";

export const prefix: string = "react-select";

export const StyledSelect = styled(Select)`
  & .${prefix}__control {
    background-color: ${({ theme }) => theme.colors.bg};
    border-color: ${({ theme }) => theme.colors.font};
    ${({ theme }) =>
      getTransition(theme.durations.ms300, [
        "color",
        "background-color",
        "border-color",
      ])}
  }

  & .${prefix}__control.${prefix}__control--is-focused {
    border-color: ${({ theme }) => theme.colors.primary};
    outline: none;
    box-shadow: none;
  }

  & .${prefix}__single-value {
    color: ${({ theme }) => theme.colors.font};
    ${({ theme }) => getTransition(theme.durations.ms300)}
  }

  & .${prefix}__menu-list {
    background-color: ${({ theme }) => theme.colors.bg};
  }

  & .${prefix}__option {
    ${({ theme }) => getTransition(theme.durations.ms300)}
  }

  & .${prefix}__option--is-focused {
    background-color: ${({ theme }) => theme.colors.secondary};
  }

  & .${prefix}__option--is-selected {
    background-color: ${({ theme }) => theme.colors.primary};
  }
`;
