import React from "react";
import './Header.scss';
import { Link } from "react-router-dom";
//import "../assets/styles/components/Header.scss";
//import logo from "../assets/static/logo.png";

const Header = () => (
  <header className="header">
    <Link to="/">
      <img className="header__img" src="{ logo }" alt="Logo" />
    </Link>

    <div className="header__menu">
      <div className="header__menu--profile">
        <img src="{ userIcon }" alt="" />
        <p>Menu 1</p>
      </div>
      <ul>
        <li>
          <a href="/">Home</a>
        </li>
        <li>
          <a href="/Use">Link Vieja Escuela </a>
        </li>
        <li>
          <Link to="/Usersys">Usersys</Link>
        </li>
        <li>
          <a href="/AppleCount">AppleCount</a>
        </li>
      </ul>
    </div>
  </header>
);
export default Header;
