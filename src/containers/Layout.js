import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import '../styles/layout.scss';
import shoppingCart from '../images/shopping-cart.png';
import logo from '../images/logo-mockup.png';

class Layout extends Component {
  navigationItems = [
    {
      path: '/home',
      text: 'Главная'
    },
    {
      path: '/shop',
      text: 'Товары'
    },
    {
      path: '/about',
      text: 'О нас'
    },
    {
      path: '/blog',
      text: 'Блог'
    }
  ]

  render() { 
    return (
      <React.Fragment>
        <nav className="navigation">
          <img src={logo} alt="logo" className="logo"/>
          <ul className="nav-list-right">
            {this.navigationItems.map((item, index) => 
              <Link to={item.path} className="nav-link" key={index}>
                {item.text}
              </Link>
            )}
            <img src={shoppingCart} alt="shopping cart" className="cart"/>
          </ul>
        </nav>
      </React.Fragment>
    );
  }
}
 
export default Layout;