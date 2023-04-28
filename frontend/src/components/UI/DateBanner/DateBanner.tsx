import styled from "styled-components";
import { dateToString } from "./api";

interface DateBannerProps {
  date: Date;
}

export const DateBanner: React.FC<DateBannerProps> = ({
  date = new Date(),
}) => {
  return <Container>{dateToString(date)}</Container>;
};

const Container = styled.div`
  box-sizing: border-box;
  display: flex;
  justify-content: center;

  font-weight: 700;
`;
