import React from "react";
import { connect } from 'react-redux';
import { NavLink } from "react-router-dom";
import "../../styles/header.scss";
import CartList from '../../containers/CartList/CartList';
import logo from "../../assets/images/logo.png";

class Header extends React.Component {

  state = {
    isCartListShown: false
  }

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

  onToggleCartList = () => {
    // открыть модальное окно со списком товаров
    // вывести товары, общую стоимость, кнопку оформить заказ
    this.setState({isCartListShown: !this.state.isCartListShown});
  }


  render(){
    return (
      <React.Fragment>
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
            <div onClick={this.onToggleCartList} className="header__shop">
              <i className="material-icons">shopping_cart</i>
              <div className="header__shopCalc">
                {this.props.productsInCart.length}
              </div>
            </div>
          </nav>
        </header>

        {this.state.isCartListShown && <CartList/>}
      </React.Fragment>
    );
  }
  
};

const mapStateToProps = (state) => {
  return {
    productsInCart: state.productsReducer.productsInCart
  }
}

export default connect(mapStateToProps)(Header);
