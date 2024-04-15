import { NavLink } from "react-router-dom";

function NavBar() {
  return (
    <div>
      <NavLink to="/home">Home</NavLink>
      <NavLink to="/pokemons">Pokemons</NavLink>
      <NavLink to="/team">Teams</NavLink>
      <NavLink to="/users">Users</NavLink>
    </div>
  );
}

export default NavBar;
