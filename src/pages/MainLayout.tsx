import Header from "../components/Header/Header";
import Cart from "../components/Cart/Cart";
import { Outlet } from "react-router-dom";
import Burger from "../components/Burger/Burger";
import SortMenu from "../components/SortMenu/SortMenu";

const MainLayout = () => {
  return (
    <>
      <Header />
      <Burger />
      <SortMenu/>
      <Outlet />
      <Cart />
    </>
  );
};

export default MainLayout;
