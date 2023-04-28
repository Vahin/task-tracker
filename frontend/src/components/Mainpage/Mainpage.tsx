import { DateBanner } from "../UI/DateBanner/DateBanner";
import { TimeOfDay } from "../UI/TimesOfDay/TimesOfDay";
import * as S from "./styles";

export const Mainpage: React.FC = () => {
  return (
    <>
      <S.PageTitle>Главная</S.PageTitle>
      <DateBanner date={new Date()} />
      <TimeOfDay time={new Date()} username='Данил' />
      <div>Месяц - неделя, задач выполнено, участников</div>
      <div>Мои задачи</div>
      <div>мои проекты</div>
    </>
  );
};
