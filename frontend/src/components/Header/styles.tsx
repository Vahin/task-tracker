import styled from "styled-components";
import { getTransition } from "../../styles/utils";

export const Header = styled.header`
  box-sizing: border-box;
  display: flex;
  align-items: center;
  padding: 10px 20px;
  position: sticky;
  top: 0;
  left: 0;
  width: 100%;

  background-color: ${({ theme }) => theme.colors.bg};
  color: ${({ theme }) => theme.colors.font};

  ${({ theme }) => getTransition(theme.durations.ms300)}
`;

export const Divider = styled.div`
  min-height: 50px;
`;

export const LeftDiv = styled.div`
  flex-grow: 1;
  gap: 20px;
  display: flex;
  align-items: center;
`;

export const CenterDiv = styled.div`
  flex-grow: 1;
`;

export const RightDiv = styled.div`
  flex-grow: 1;
  gap: 20px;
  display: flex;
  justify-content: end;
  align-items: center;
`;
