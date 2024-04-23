import React from "react";
import { NavLink } from "react-router-dom";

function NavBar() {
  return (
    <div class="framed">
      <div class="framed-primary">
        <ul>
          <li>
            <NavLink to="/home">Home</NavLink>
          </li>
          <li>
            <NavLink to="/pokemons">Pokemons</NavLink>
          </li>
          <li>
            <NavLink to="/team">Teams</NavLink>
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
