import React from "react";
import { connect } from "react-redux";
import { NavLink, Link } from "react-router-dom";
import "./Header.scss";
import CartList from "../../containers/CartList/CartList";
import logo from "../../assets/images/logo.png";
import { withRouter } from "react-router";
import { slide as Menu } from 'react-burger-menu';

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

  componentDidUpdate = (prevProps) =>  {
    if(prevProps !== this.props){
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

  getProductsAmount = () => {
    const {productsInCart} = this.props;
    if(productsInCart.length > 0) {
      return productsInCart
              .map(product => product.amount)
              .reduce( (current, next) => current + next);
    }else{
      return 0;
    }
  }

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
    let headerStyles;
    if(this.state.windowYPosition > 0 || this.props.location.pathname.includes("product")){
      headerStyles = {
        background: "#404040",
        position: "fixed",
        width: "100%",
        boxSizing: "border-box"
      }
    }else if(this.props.location.pathname.includes("cart")){
        headerStyles = {
          background: "#404040",
          position: "fixed",
          width: "100%",
          boxSizing: "border-box"
        }
    }
    return (
      <header
        className="header"
        style={
          headerStyles
        }
        >
        
        <div className="header__wrapper">
          <div className="header__logo">
            <Link to="/">
              <img src={logo} alt="logo" className="header__logoImg" />
            </Link>
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

            <NavLink className="header__shop" to="/cart">
              <i className={'material-icons ' + (this.state.isCartListShown ? 'active': null)}>
                shopping_cart
              </i>
              <div className="header__shopCalc">
                {this.getProductsAmount()}
              </div>
            </NavLink>
          </nav>
        </div>
        {this.state.isCartListShown && <CartList />}
      </header>
    );
  }
}

const mapStateToProps = state => {
  return {
    productsInCart: state.productsReducer.productsInCart
  };
};

export default withRouter(connect(mapStateToProps)(Header));
