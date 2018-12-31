import React from "react";
import { connect } from 'react-redux';
import { NavLink } from "react-router-dom";
import "../../styles/header.scss";
import logo from "../../assets/images/logo.png";

class Header extends React.Component {
  navigationItems = [
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

  render(){
    return (
      <header className="header">
        <div className="header__logo">
          <NavLink to="/">
            <img src={logo} alt="logo" className="header__logoImg" />
          </NavLink>
        </div>
        <nav className="header__navigation">
          {this.navigationItems.map((item, index) => (
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
            <div className="header__shopCalc">
              {this.props.productsInCart.length}
            </div>
          </div>
        </nav>
      </header>
    );
  }
  
};

const mapStateToProps = (state) => {
  return {
    productsInCart: state.productsReducer.productsInCart
  }
}

export default connect(mapStateToProps)(Header);
