import Select from "react-select";
import styled from "styled-components";
import { getTransition } from "../../../styles/utils";

const StyledSelect = styled(Select)`
  & .react-select__control {
    background-color: ${({ theme }) => theme.colors.bg};
    border-color: ${({ theme }) => theme.colors.font};
    ${({ theme }) =>
      getTransition(theme.durations.ms300, [
        "color",
        "background-color",
        "border-color",
      ])}
  }

  & .react-select__control.react-select__control--is-focused {
    border-color: ${({ theme }) => theme.colors.primary};
    outline: none;
    box-shadow: none;
  }

  & .react-select__single-value {
    color: ${({ theme }) => theme.colors.font};
    ${({ theme }) => getTransition(theme.durations.ms300)}
  }

  & .react-select__menu-list {
    background-color: ${({ theme }) => theme.colors.bg};
  }

  & .react-select__option {
    ${({ theme }) => getTransition(theme.durations.ms300)}
  }

  & .react-select__option--is-selected {
    background-color: ${({ theme }) => theme.colors.primary};
  }

  & .react-select__option--is-focused {
    background-color: ${({ theme }) => theme.colors.secondary};
  }
`;

const options = [
  { value: "week", label: "Неделя" },
  { value: "mounth", label: "Месяц" },
];

export const CustomSelect = () => {
  return (
    <StyledSelect
      defaultValue={options[0]}
      classNamePrefix={"react-select"}
      options={options}
    />
  );
};
