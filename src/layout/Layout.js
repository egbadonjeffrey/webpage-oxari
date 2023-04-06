import React, { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import Nav from "../components/nav/Nav";
import Footer from "../components/footer/Footer";
import "./layout.css";

const Layout = () => {
  const [desktop, setDesktop] = useState(true);

  useEffect(() => {
    if (window.innerWidth !== undefined) {
      const handleNoMobile = () => {
        if (window.innerWidth < 500) {
          console.log(window.innerWidth);
          setDesktop(false);
        }
      };

      handleNoMobile();
    }
  });
  return (
    <div className="layout">
      <Nav />

      {desktop ? (
        <Outlet />
      ) : (
        <div
          style={{
            height: "50vh",
            width: "90%",
            margin: "10rem auto",
            textAlign: "center",
          }}
        >
          <h1>
            Please this website is not ready for view on mobile <br />
            Please visit on a desktop
          </h1>
        </div>
      )}

      <Footer />
    </div>
  );
};

export default Layout;
