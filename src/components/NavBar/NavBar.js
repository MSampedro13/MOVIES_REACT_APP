import React from "react";
import { NavLink } from "react-router-dom";
import { useCountMoviesFavorites } from "../../hooks/useCountMoviesFavorites";
import Logo from "../../Film.png";

import "./Navbar.css";

export default function NavBar() {
  const { countFav } = useCountMoviesFavorites();
  return (
    <header className="navbar">
      <div>
        <img
          id="logoFilm"
          src={Logo}
          width="30"
          height="30"
          className="d-inline-block align-top"
          alt=""
        />
      </div>
      <nav>
        <ul className="list">
          <li className="list-item">
            <NavLink exact to="/">
              Home
            </NavLink>
            <NavLink to="/favs">{`Favoritas (${countFav})`}</NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
}
