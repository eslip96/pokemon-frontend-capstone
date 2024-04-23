import React from "react";
import { NavLink } from "react-router-dom";

function Footer() {
  return (
    <div className="footer-wrapper">
      <div className="footer-links">
        <NavLink to="/terms" className="footer-link">
          Terms&amp;Conditions
        </NavLink>
        <NavLink to="/about" className="footer-link">
          About
        </NavLink>
      </div>
    </div>
  );
}

export default Footer;
