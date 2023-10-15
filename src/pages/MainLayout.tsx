import React from "react";
import Header from "../components/Header/Header";
import Cart from "../components/Cart/Cart";
import { Outlet } from "react-router-dom";
import ProductList from "../components/ProductList/ProductList";
import Burger from "../components/Burger/Burger";

const MainLayout = () => {
  return (
    <>
      <Header />
      <Burger />
      <ProductList />
      <Outlet />

      <Cart />
    </>
  );
};

export default MainLayout;
