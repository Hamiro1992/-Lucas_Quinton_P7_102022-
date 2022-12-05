import React from "react";
import { NavLink } from "react-router-dom";
import logoHeader from "../assets/img/LOGO-Header.svg";

function Header() {
  let activeStyle = {
    textDecoration: "underline",
    color: "#FF6060",
  };

  return (
    <div className="Header">
      <div className="Logo-Header">
        <NavLink to="/home" className="nav-active">
          <img src={logoHeader} alt="Kasa" className="lmj-logo" />
        </NavLink>
      </div>
      <div className="navigation">
        <ul>
          <NavLink
            to="/home"
            style={({ isActive }) => (isActive ? activeStyle : null)}
          >
            <li>Acceuil</li>
          </NavLink>
          <NavLink
            to="/about"
            style={({ isActive }) => (isActive ? activeStyle : null)}
          >
            <li className="Apropos">A Propos</li>
          </NavLink>
        </ul>
      </div>
    </div>
  );
}

export default Header;
