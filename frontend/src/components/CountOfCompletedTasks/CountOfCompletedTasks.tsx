import styled from "styled-components";
import { CustomSelect } from "../UI/CustomSelect/CustomSelect";

export const CountOfCompletedTasks: React.FC = () => {
  return (
    <Container>
      <CustomSelect />
      <span>0 задач выполнено</span>
      <span>0 учаcтников</span>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  gap: 15px;
  align-items: center;

  border: 1px solid ${({ theme }) => theme.colors.font};
  border-radius: 999px;

  padding: 5px 20px;
`;
