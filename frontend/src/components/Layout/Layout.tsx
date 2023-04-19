import styled from "styled-components";

import { Outlet } from "react-router-dom";
import { Header } from "../Header/Header";

const Wrapper = styled.div`
  max-width: 1200px;
  min-width: 300px;
  overflow: hidden;
  margin: 0 auto;
`;

export const Layout: React.FC = () => {
  return (
    <Wrapper>
      <Header />
      <Outlet />
      <footer>Footer</footer>
    </Wrapper>
  );
};
