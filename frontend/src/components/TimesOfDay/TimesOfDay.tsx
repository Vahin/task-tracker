import styled from "styled-components";
import { timeOfDayToString } from "./api";

interface TimeOfDayProps {
  time?: Date;
  username?: string;
}

export const TimeOfDay: React.FC<TimeOfDayProps> = ({
  time = new Date(),
  username = "Незнакомец",
}) => {
  return (
    <Container>
      {timeOfDayToString(time)}, {username}
    </Container>
  );
};

const Container = styled.div`
  box-sizing: border-box;
  display: flex;
  justify-content: center;
  font-size: 1.75rem;
`;
