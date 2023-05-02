import { Outlet } from "react-router-dom";
import { Header } from "../Header/Header";
import styled from "styled-components";

export const Layout: React.FC = () => {
  return (
    <>
      <Header />
      <Main>
        <Outlet />
      </Main>
    </>
  );
};

const Main = styled.main`
  padding: 20px;
`;
