import React from "react";
import logo from "../../assets/icons/logo.svg";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <nav className="navbar flex items-center bg-main-color">
      <Link to="/" className="logo relative">
        <img src={logo} alt="logo" />
      </Link>
      <ul className="w-full flex items-center justify-around text-white font-medium text-2xl">
        <Link to="/" className="no-underline text-white">
          Accueil
        </Link>
        <Link to="#" className="no-underline text-white">
          Profil
        </Link>
        <Link to="#" className="no-underline text-white">
          Réglage
        </Link>
        <Link to="#" className="no-underline text-white">
          Communauté
        </Link>
      </ul>
    </nav>
  );
};

export default NavBar;
