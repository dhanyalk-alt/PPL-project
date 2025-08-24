import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

function navbar() {
  return (
    <nav className="navbar">
      <div className="nav-logo">🌾 Raitha Bandu</div>
      <ul className="nav-links">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/weather">Weather</Link></li>
        <li><Link to="/market">Market</Link></li>
        <li><Link to="/government">Government</Link></li>
        <li><Link to="/expert">Expert</Link></li>
        <li><Link to="/calendar">Calendar</Link></li>
        <li><Link to="/forum">Forum</Link></li>
        <li><Link to="/offline">Offline</Link></li>
      </ul>
    </nav>
  );
}

export default navbar;


