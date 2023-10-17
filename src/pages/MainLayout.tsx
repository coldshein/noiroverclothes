import Header from "../components/Header/Header";
import Cart from "../components/Cart/Cart";
import { Outlet } from "react-router-dom";
import Burger from "../components/Burger/Burger";
import SideBar from "../components/SideBar/SideBar";

const MainLayout = () => {
  return (
    <>
      <Header />
      <Burger />
      <div className="home-container">
        <SideBar />
        <Outlet />
      </div>
      <Cart />
    </>
  );
};

export default MainLayout;
