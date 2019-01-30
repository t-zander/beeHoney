import React from "react";
import { connect } from "react-redux";
import { NavLink } from "react-router-dom";
import "./Header.scss";
import CartList from "../../containers/CartList/CartList";
import logo from "../../assets/images/logo.png";
import { withRouter } from "react-router";

class Header extends React.Component {
  state = {
    isCartListShown: false,
    transform: null
  };
  componentDidMount() {
    if (this.props.location.pathname.includes("shop")) {
      window.addEventListener("scroll", this.handleScroll);
    }
  }

  navigationItems = [
    {
      path: "/",
      text: "Главная"
    },
    {
      path: "/shop",
      text: "Продукция"
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
    this.setState({ isCartListShown: !this.state.isCartListShown });
  };

  handleScroll = event => {
    let windowYPosition = event.path[1].scrollY;
    this.setState({
      windowYPosition: windowYPosition
    });
  };

  render() {
    return (
      <React.Fragment>
        <header
          className="header"
          style={
            this.state.windowYPosition > 0
              ? {
                  background: "#404040",
                  position: "fixed",
                  width: "100%",
                  boxSizing: "border-box"
                }
              : { background: "transparent" }
          }
        >
          <div className="header__wrapper">
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
                  exact={item.path === "/" ? true : false}
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
          </div>
        </header>

        {this.state.isCartListShown && <CartList />}
      </React.Fragment>
    );
  }
}

const mapStateToProps = state => {
  return {
    productsInCart: state.productsReducer.productsInCart
  };
};

export default withRouter(connect(mapStateToProps)(Header));
