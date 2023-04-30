import { Greeting } from "../Greeting/Greeting";
import * as S from "./styles";

export const Mainpage: React.FC = () => {
  return (
    <>
      <S.PageTitle>Главная</S.PageTitle>
      <Greeting />

      <div>Мои задачи</div>
      <div>мои проекты</div>
    </>
  );
};
