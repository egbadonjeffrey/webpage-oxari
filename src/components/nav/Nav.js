import { useState } from "react";
import { NavLink } from "react-router-dom";
import "./nav.css";
import Logo from "../../images/logo.png";
import { useEffect } from "react";

const Nav = () => {
  const [transparent, setTransparent] = useState(true);
  const [show, setShow] = useState(true);
  const [prevScrollPosition, setPrevScrollPosition] = useState(0);

  const handleBackground = () => {
    if (window.scrollY > 300) {
      setTransparent(false);
      console.log(window.scrollY);
    } else {
      setTransparent(true);
      console.log(window.scrollY);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleBackground);

    return () => window.removeEventListener("scroll", handleBackground);
  });

  const handleScroll = () => {
    if (window && window !== undefined) {
      let currentScrollPosition = window.scrollY;

      // console.log(currentScrollPosition);
      // console.log(show);

      if (currentScrollPosition > prevScrollPosition) {
        setShow(false);
      } else {
        setShow(true);
      }

      setPrevScrollPosition(window.scrollY);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  });

  return (
    <nav
      className={`nav ${!show ? "not-visible" : "visible"}   ${
        transparent ? "" : "background-color"
      }`}
    >
      <div className="nav-container">
        <div className="logo-container">
          <NavLink to="/" className="logo">
            <img src={Logo} alt="logo" />
          </NavLink>
        </div>

        <div className="nav-links">
          <NavLink to="dashboard">Dashboard</NavLink>
          <NavLink to="about">About</NavLink>
          <NavLink to="mission">Mission</NavLink>
          <NavLink to="blog">Blog</NavLink>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
