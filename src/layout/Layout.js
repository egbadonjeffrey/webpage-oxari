import React from "react";
import { Outlet } from "react-router-dom";
import Nav from "../components/nav/Nav";
import Footer from "../components/footer/Footer";
import "./layout.css";

const Layout = () => {
  return (
    <div className="layout">
      <Nav />

      <Outlet />

      <Footer />
    </div>
  );
};

export default Layout;
