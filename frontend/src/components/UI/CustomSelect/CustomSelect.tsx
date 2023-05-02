import * as S from "./style";

interface IOption {
  value: string;
  label: string;
}

const options: IOption[] = [
  { value: "week", label: "Неделя" },
  { value: "mounth", label: "Месяц" },
];

type CustomSelectProps = {
  onChange?: (value: string) => void;
  isSearchable?: boolean;
  isLoading?: boolean;
  value?: IOption;
};

export const CustomSelect: React.FC<CustomSelectProps> = ({
  onChange,
  isSearchable,
  isLoading,
  value = options[0],
}) => {
  const handleChange = (selected: unknown) => {
    const value = (selected as IOption).value;

    if (onChange) {
      onChange(value);
    }
  };

  return (
    <S.StyledSelect
      value={value}
      classNamePrefix={S.prefix}
      options={options}
      onChange={handleChange}
      isSearchable={isSearchable ? isSearchable : false}
      isLoading={isLoading ? isLoading : false}
    />
  );
};
