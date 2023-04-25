import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { toggleTheme } from "../../app/ui/UISlice";
import { Button } from "../UI/Button/Button";
import { getThemeSelector } from "../../app/ui/UISelectors";
import { ThemeEnum } from "../../interfaces/styled";
import { Burger } from "../UI/Burger/Burger";
import * as S from "./styles";

export const Header: React.FC = () => {
  const dispatch = useAppDispatch();
  const theme = useAppSelector(getThemeSelector);

  const handleClickButtonTheme = () => {
    dispatch(toggleTheme());
  };

  return (
    <S.Header>
      <S.LeftDiv>
        <Burger onClick={() => {}} size={Burger.size.sm} />
        <Button
          size={Button.size.xs}
          variant={Button.variant.solid}
          color={Button.color.primary}
          onClick={handleClickButtonTheme}
        >
          Создать
        </Button>
      </S.LeftDiv>

      <S.CenterDiv>
        <div>Search</div>
      </S.CenterDiv>

      <S.RightDiv>
        <Button
          size={Button.size.xs}
          variant={Button.variant.ghost}
          color={Button.color.primary}
          onClick={handleClickButtonTheme}
        >
          {theme.type === ThemeEnum.light ? "Ночь" : "День"}
        </Button>

        <div>User</div>
      </S.RightDiv>
    </S.Header>
  );
};
