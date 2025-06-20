import React from "react";
import Navbar from "../Components/Navbar";
import { Outlet, useLocation } from "react-router";
import Footer from "../Components/Footer";

const MainLayout = () => {
  const location = useLocation();

  return (
    <div>
      {location.pathname === "/" ? "" : <Navbar></Navbar>}
      <Outlet></Outlet>
      <Footer></Footer>
    </div>
  );
};

export default MainLayout;
