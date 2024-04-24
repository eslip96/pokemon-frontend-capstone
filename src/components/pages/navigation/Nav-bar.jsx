import React from "react";
import { NavLink } from "react-router-dom";
import { useAuthInfo } from "../../../context/AuthContext";

function NavBar() {
  const { userInfo, login, logout } = useAuthInfo();

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
                <NavLink to="/pokemons">POKEMON GALLERY</NavLink>
              </li>
            </ul>
          </li>
          <li className="hover-menu">
            <span>Teams</span>
            <ul>
              <li>
                <NavLink to="/team">Team Creator</NavLink>
              </li>
              <li>
                <NavLink to="/pokemon">Team GALLERY</NavLink>
              </li>
            </ul>
          </li>

          <li className="hover-menu">
            <span>Profile</span>
            <ul>
              <li>
                {userInfo ? (
                  <NavLink onClick={logout} to="/login">
                    Logout
                  </NavLink>
                ) : (
                  <NavLink to="/login">Login</NavLink>
                )}
              </li>
              <li>
                <NavLink to="/create/profile">Create a Profile</NavLink>
              </li>
              <li>
                <NavLink to="/profile">Profile</NavLink>
              </li>
            </ul>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default NavBar;
