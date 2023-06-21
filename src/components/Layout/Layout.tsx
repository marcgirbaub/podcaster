import { Outlet } from "react-router-dom";
import Header from "../Header/Header";
import LayoutStyled from "./LayoutStyled";

const Layout = (): JSX.Element => {
  return (
    <LayoutStyled>
      <Header />
      <main className="main-content">
        <Outlet />
      </main>
    </LayoutStyled>
  );
};

export default Layout;
