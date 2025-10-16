import React from "react";
import "./Navbar.css";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar">
      <h1 className="nav-heading">Task App</h1>
      <div className="nav-right">
        <div className="navlink-div">
          <NavLink to="/" className="navlink">
            Home
          </NavLink>
          <NavLink to="/profile" className="navlink">
            Profile
          </NavLink>
          <NavLink to="/about" className="navlink">
            About
          </NavLink>
        </div>
        <img src="../../../public/vite.svg" alt="" />
      </div>
    </nav>
  );
};

export default Navbar;
