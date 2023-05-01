import { Greeting } from "../Greeting/Greeting";
import { TaskWidjet } from "../TaskWidjet/TaskWidjet";
import * as S from "./styles";

export const Mainpage: React.FC = () => {
  return (
    <>
      <S.PageTitle>Главная</S.PageTitle>
      <Greeting />
      <TaskWidjet />
    </>
  );
};
