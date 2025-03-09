import React from "react";
import "../css/Navbar.css"
import { NavLink } from "react-router-dom"; // Import NavLink

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <NavLink to="/nbafirsts" className="navbar-link">NBA Firsts</NavLink>
        <NavLink to="/interesting" className="navbar-link">Interesting</NavLink>
        <NavLink to="/thingstowatch" className="navbar-link">Things to Watch</NavLink>
        <NavLink to="/about" className="navbar-link">About</NavLink>
      </div>
    </nav>
  );
};

export default Navbar;