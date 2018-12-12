import React from 'react';
import {Link} from 'react-router-dom';
import '../styles/header.scss';
import shoppingCart from '../images/shopping-cart.png';
import logo from '../images/logo-mockup.png';


const header = () => {
  const navigationItems = [
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

  return ( 
    <nav className="navigation">
      <img src={logo} alt="logo" className="logo"/>
      <ul className="nav-list-right">
        {navigationItems.map((item, index) => 
          <Link to={item.path} className="nav-link" key={index}>
            {item.text}
          </Link>
        )}
        <img src={shoppingCart} alt="shopping cart" className="cart"/>
      </ul>
    </nav>
  );
}
 
export default header;