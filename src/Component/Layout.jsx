import React from "react";
import NavBar from "./NavBar/NavBar";
import { Outlet } from "react-router-dom";

const Layout = ({ isLoggedIn }) => {
  return (
    <>
      <NavBar isLoggedIn={isLoggedIn} />
      <Outlet />
    </>
  );
};

export default Layout;
