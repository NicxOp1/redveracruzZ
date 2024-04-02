import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./NavBar.css";
import logo from "/assets/Logo.png";

const NavBar = () => {
  const [menu, setMenu] = useState(false);

  const handleActive = () => {
    setMenu(!menu);
  };
  return (
    <div className="navbar">
      <div className="logo">
        <img src={logo} alt="logo" />
      </div>
      <div className="nav-links">
        <Link to="/">INICIO</Link>
        <a to="/" href="#diputados">DIPUTADOS</a>
        <Link to="https://api.whatsapp.com/send?phone=5215586666977&text=hola" target="_blank">CONTÁCTANOS</Link>
      </div>
      <div className={menu ? "menu" : "hamburger"} onClick={handleActive}>
        <span className="bar"></span>
        <span className="bar"></span>
        <span className="bar"></span>
      </div>
      {menu ? (
        <div className="hamb-links">
          <Link to="/"  onClick={handleActive}>INICIO</Link>
          <a href="#diputados" onClick={handleActive}>DIPUTADOS</a>
          <Link to="https://api.whatsapp.com/send?phone=5215586666977&text=hola" target="_blank"  onClick={handleActive}>CONTÁCTANOS</Link>
        </div>
      ) : <></>}
    </div>
  );
};

export default NavBar;
