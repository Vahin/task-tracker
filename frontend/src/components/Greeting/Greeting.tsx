import styled from "styled-components";
import { DateBanner } from "../DateBanner/DateBanner";
import { TimeOfDay } from "../TimesOfDay/TimesOfDay";
import { CountOfCompletedTasks } from "../CountOfCompletedTasks/CountOfCompletedTasks";

export const Greeting: React.FC = () => {
  return (
    <Container>
      <DateBanner />
      <TimeOfDay />
      <CountOfCompletedTasks />
    </Container>
  );
};

const Container = styled.div`
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.7rem;
`;
