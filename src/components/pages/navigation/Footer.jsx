import { NavLink } from "react-router-dom";

function Footer() {
  return (
    <div className="footer-wrapper">
      <div className="footer-links">
        <NavLink to="/terms">Terms&Conditions</NavLink>
        <NavLink to="/about">About</NavLink>
      </div>
    </div>
  );
}

export default Footer;
