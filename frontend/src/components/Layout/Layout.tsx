import { Outlet } from "react-router-dom";

export const Layout: React.FC = () => {
  return (
    <div>
      <header>Header</header>
      <Outlet />
      <footer>Footer</footer>
    </div>
  );
};
