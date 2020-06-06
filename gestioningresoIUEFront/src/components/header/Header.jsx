import React from "react";
import "./Header.scss";
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
          <a href="/TypeId">Link Vieja Escuela TypeId</a>
        </li>
        <li>
          <Link to="/TypeId">TypeId</Link>
        </li>
        <li>
          <a href="/Vehicle">Link Vieja Escuela Vehiculo</a>
        </li>
        <li>
          <Link to="/Vehicle">Vehiculo</Link>
        </li>
        <li>
          <Link to="/Area">Area</Link>
        </li>
        <li>
          <Link to="/Facultad">Facultad</Link>
        </li>
        <li>
          <Link to="/Proveedor">Proveedor</Link>
        </li>
        <li>
          <a href="/AppleCount">AppleCount</a>
        </li>
	<li>
          <a href='/Organizacion'>Link Vieja Escuela Organizacion</a>
        </li>
        <li>
          <Link to='/Organizacion'>Organizacion</Link>
        </li>
	<li>
	<a href='/Associated'>Link Vieja Escuela Empleado</a>
	</li>
	<li>
	<Link to='/Associated'>Asociado</Link>
	</li>
      </ul>
    </div>
  </header>
);
export default Header;
