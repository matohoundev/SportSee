import React from "react";
import logo from "../../assets/icons/logo.svg";

const NavBar = () => {
  return (
    <nav className="navbar flex items-center bg-main-color">
      <img src={logo} alt="logo" className="logo overflow-auto relative" />
      <ul className="w-full flex items-center justify-around text-white font-medium text-2xl">
        <li>Accueil</li>
        <li>Profil</li>
        <li>Réglage</li>
        <li>Communauté</li>
      </ul>
    </nav>
  );
};

export default NavBar;
