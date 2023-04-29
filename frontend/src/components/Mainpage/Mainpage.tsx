import { CountOfCompletedTasks } from "../CountOfCompletedTasks/CountOfCompletedTasks";
import { Greeting } from "../Greeting/Greeting";
import * as S from "./styles";

export const Mainpage: React.FC = () => {
  return (
    <>
      <S.PageTitle>Главная</S.PageTitle>
      <Greeting />
      <CountOfCompletedTasks />
      <div>Мои задачи</div>
      <div>мои проекты</div>
    </>
  );
};
