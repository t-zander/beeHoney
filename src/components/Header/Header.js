import React from "react";
import { NavLink } from "react-router-dom";
import "../../styles/header.scss";
import logo from "../../assets/images/logo.png";

const header = () => {
  const navigationItems = [
    {
      path: "/",
      text: "Главная"
    },
    {
      path: "/shop",
      text: "Товары"
    },
    {
      path: "/about",
      text: "О нас"
    },
    {
      path: "/blog",
      text: "Блог"
    }
  ];

  return (
    <header className="header">
      <div className="header__logo">
        <NavLink to="/">
          <img src={logo} alt="logo" className="header__logoImg" />
        </NavLink>
      </div>
      <nav className="header__navigation">
        {navigationItems.map((item, index) => (
          <NavLink
            key={index}
            to={item.path}
            exact
            className="header__navLink"
            activeClassName="active"
          >
            {item.text}
          </NavLink>
        ))}
        <div className="header__shop">
          <i className="material-icons">shopping_cart</i>
          <div className="header__shopCalc">2</div>
        </div>
      </nav>
    </header>
  );
};

export default header;
