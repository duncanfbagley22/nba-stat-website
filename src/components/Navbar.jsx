import React, { useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { ChevronDown } from "lucide-react"; // Import Lucide icon for the indicator
import "../css/Navbar.css";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  // Map routes to display names
  const routeNames = {
    "/nbafirsts": "NBA Firsts",
    "/interesting": "Interesting",
    "/thingstowatch": "Things to Watch",
    "/about": "About",
  };

  // Get the current route name or default to "Menu"
  const currentRouteName = routeNames[location.pathname] || "Menu";

  return (
    <nav className="navbar">
      <div className="navbar-container">
        {/* Current Link Name with Indicator */}
        <button className="menu-button" onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? "Select" : currentRouteName} 
          <ChevronDown size={22} className={`indicator ${menuOpen ? "rotate" : ""}`} />
        </button>


        {/* Menu Items */}
        <div className={`nav-links ${menuOpen ? "open" : ""}`}>
          <NavLink to="/nbafirsts" className="navbar-link" onClick={() => setMenuOpen(false)}>NBA Firsts</NavLink>
          <NavLink to="/interesting" className="navbar-link" onClick={() => setMenuOpen(false)}>Interesting</NavLink>
          <NavLink to="/thingstowatch" className="navbar-link" onClick={() => setMenuOpen(false)}>Things to Watch</NavLink>
          <NavLink to="/about" className="navbar-link" onClick={() => setMenuOpen(false)}>About</NavLink>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;