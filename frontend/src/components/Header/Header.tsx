import styled from "styled-components";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { toggleTheme } from "../../app/ui/UISlice";
import { Button } from "../UI/Button/Button";
import { getThemeSelector } from "../../app/ui/UISelectors";
import { ThemeEnum } from "../../interfaces/styled";
import { getTransition } from "../../styles/utils";

export const Header: React.FC = () => {
  const dispatch = useAppDispatch();
  const theme = useAppSelector(getThemeSelector);

  const handleClickButtonTheme = () => {
    dispatch(toggleTheme());
  };

  return (
    <SHeader>
      <div>
        <div>burger</div>
      </div>
      <Button
        size={Button.size.xs}
        variant={Button.variant.ghost}
        color={Button.color.primary}
        onClick={handleClickButtonTheme}
      >
        {theme.type === ThemeEnum.light ? "Ночь" : "День"}
      </Button>
      <div>
        <div>Search</div>
      </div>
      <div>
        <div>User</div>
      </div>
    </SHeader>
  );
};

const SHeader = styled.header`
  box-sizing: border-box;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px 10px;

  background-color: ${({ theme }) => theme.colors.bg};
  color: ${({ theme }) => theme.colors.font};

  ${({ theme }) => getTransition(theme.durations.ms300)}
`;
