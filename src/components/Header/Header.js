import React from "react";
import { NavLink } from "react-router-dom";
import "../../styles/header.scss";
import shoppingCart from "../../assets/images/shopping-cart.png";
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
    <nav className="navigation">
      <div className="logo-img">
        <img src={logo} alt="logo" className="logo" />
      </div>
      
      <ul className="nav-list-right">
        {navigationItems.map((item, index) => (
          <NavLink to={item.path} exact className="nav-link" activeClassName="active" key={index}>
            {item.text}
          </NavLink>
        ))}
        <img src={shoppingCart} alt="shopping cart" className="cart" />
      </ul>
    </nav>
  );
};

export default header;
