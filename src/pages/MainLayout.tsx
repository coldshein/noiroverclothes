import Header from "../components/Header/Header";
import Cart from "../components/Cart/Cart";
import { Outlet } from "react-router-dom";
import Burger from "../components/Burger/Burger";

const MainLayout = () => {
  return (
    <>
      <Header />
      <Burger />
      <Outlet />
      <Cart />
    </>
  );
};

export default MainLayout;
