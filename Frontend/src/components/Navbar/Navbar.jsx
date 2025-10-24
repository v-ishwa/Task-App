import React, { useState } from "react";
import "./Navbar.css";
import { NavLink } from "react-router-dom";
import menu from "../../assets/menu.png";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="navbar">
      <img src={menu} alt="" className="nav-menu" onClick={() => setIsMenuOpen(!isMenuOpen)} />
      <h1 className="nav-heading">Task App</h1>
      <div className="nav-right">
        <div className="navlink-div">
          <NavLink to="/" className={({isActive}) => isActive ? "navlink-active" : "navlink" }>
            Home
          </NavLink>
          <NavLink to="/profile" className={({isActive}) => isActive ? "navlink-active" : "navlink" }>
            Profile
          </NavLink>
          <NavLink to="/about" className={({isActive}) => isActive ? "navlink-active" : "navlink" }>
            About
          </NavLink>
        </div>
        <img className="nav-profile-pic" src="../../../public/vite.svg" alt="" />
      </div>
    </nav>
  );
};

export default Navbar;
