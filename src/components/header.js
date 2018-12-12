import React from "react";
import { NavLink } from "react-router-dom";
import "../styles/header.scss";
import shoppingCart from "../assets/images/shopping-cart.png";
import logo from "../assets/images/logo-mockup.png";

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
    <nav className="navigation">
      <img src={logo} alt="logo" className="logo" />
      <ul className="nav-list-right">
        {navigationItems.map((item, index) => (
          <NavLink to={item.path} className="nav-link" key={index}>
            {item.text}
          </NavLink>
        ))}
        <img src={shoppingCart} alt="shopping cart" className="cart" />
      </ul>
    </nav>
  );
};

export default header;
