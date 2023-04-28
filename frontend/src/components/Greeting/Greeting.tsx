import styled from "styled-components";
import { DateBanner } from "../DateBanner/DateBanner";
import { TimeOfDay } from "../TimesOfDay/TimesOfDay";

export const Greeting: React.FC = () => {
  return (
    <Container>
      <DateBanner />
      <TimeOfDay />
    </Container>
  );
};

const Container = styled.div`
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.5rem;
`;
