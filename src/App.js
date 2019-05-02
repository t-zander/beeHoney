import React, { Component } from "react";
import Header from "./components/Header/Header";
import { Route, Switch, Redirect } from "react-router-dom";
import MainPage from "./containers/MainPage/MainPage";
import ShopPage from "./containers/Shop/Shop";
import AboutPage from "./containers/About/About";
import BlogPage from "./containers/Blog/Blog";
import Admin from "./containers/Admin/Admin";
import AdminLogin from "./containers/AdminLogin/AdminLogin";
import AdminSidebar from "./containers/Admin/AdminSidebar/AdminSidebar";
import AdminAbout from "./containers/Admin/AdminAbout/AdminAbout";
import Product from "./components/Product/Product";
import AdminCategories from "./containers/Admin/AdminCategories/AdminCategories";
import ErrorPage from "./components/ErrorPage/ErrorPage";

import { slide as Menu } from 'react-burger-menu';
import { NavLink } from 'react-router-dom';
import OrderCheckout from "./containers/OrderCheckout/OrderCheckout";


class App extends Component {
  render() {
    return (
      <React.Fragment>
        {window.location.pathname.includes("admin") ? (
          <AdminSidebar />
        ) : (
          <div id="outer-container">
          <Menu width={ '250px' }>
            <NavLink to="/" exact className="menu-item"><i className="fas fa-home"></i> Главная</NavLink>
            <NavLink to="/shop" className="menu-item"><i className="fas fa-cookie-bite"></i> Продукция</NavLink>
            <NavLink to="/about" className="menu-item"><i className="fas fa-question-circle"></i> О нас</NavLink>
            <NavLink to="/blog" exact className="menu-item"><i className="fas fa-blog"></i> Блог</NavLink>
          </Menu>
          <Header />
          </div>
        )}
          <Switch>
            <Route path="/" exact component={MainPage} />
            <Route path="/admin/categories" component={AdminCategories}/>
            <Route path="/admin/login" component={AdminLogin} />
            <Route path="/admin/orders" component={AdminAbout} />
            <Route path="/admin/about" component={AdminAbout} />
            <Route path="/admin" component={Admin} />
            <Route path="/about" component={AboutPage} />
            <Route path="/blog" component={BlogPage} />
            <Route path="/shop/product/:id" component={Product} />
            <Route path="/shop" component={ShopPage} />
            <Route path="/cart" component={OrderCheckout} />
            <Route path="/not-found" component={ErrorPage}/>
            <Redirect to="/not-found"/>
          </Switch>
          
      </React.Fragment>
    );
  }
}

export default App;
