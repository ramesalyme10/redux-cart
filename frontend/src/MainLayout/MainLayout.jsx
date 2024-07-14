import React, { useState } from "react";
import { Outlet } from "react-router-dom";
import Header from "../components/Header/Header";
import Carts from "../components/Carts/Carts";
import Footer from "../components/Footer/Footer";

const MainLayout = () => {
  const [isCarts, setIsCart] = useState(false);
  return (
    <>
      <Header isCarts={isCarts} setIsCart={setIsCart} />
      <Outlet />
      <Carts isCarts={isCarts} setIsCart={setIsCart} />
      <Footer/>
    </>
  );
};

export default MainLayout;
