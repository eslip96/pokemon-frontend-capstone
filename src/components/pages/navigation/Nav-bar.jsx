import React from "react";
import { NavLink } from "react-router-dom";

function NavBar() {
  return (
    <div className="framed">
      <div className="framed-primary">
        <ul>
          <li>
            <NavLink to="/home">Home</NavLink>
          </li>
          <li className="hover-menu">
            <span>Pokemons</span>
            <ul>
              <li>
                <NavLink to="/pokemon">POKEMON CREATOR</NavLink>
              </li>
              <li>
                <NavLink to="/pokemon">POKEMON GALLERY</NavLink>
              </li>
            </ul>
          </li>
          <li className="hover-menu">
            <span>Teams</span>
            <ul>
              <li>
                <NavLink to="/pokemon">Team Creator</NavLink>
              </li>
              <li>
                <NavLink to="/pokemon">Team GALLERY</NavLink>
              </li>
            </ul>
          </li>

          <li>
            <NavLink to="/login">Login</NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default NavBar;
