import React, { Component } from "react";
import "./Admin.scss";
import logo from "../../assets/images/logo.png";
import { Link, NavLink } from "react-router-dom";
import { withRouter } from "react-router";
class Admin extends Component {
  render() {
    return (
      <div className="admin">
        <div className="admin__sideBar">
          <div className="admin__name">
            <Link to="/">Bee Honey</Link>
          </div>
          <NavLink
            exact
            activeClassName="active"
            to="/admin"
            className="admin__navItem"
          >
            <i className="fab fa-forumbee" />
            Kатегории
          </NavLink>
          <NavLink to="/admin/products" className="admin__navItem">
            <i className="fas fa-user-alt" />О нас
          </NavLink>
          <NavLink to="/admin/blog" className="admin__navItem">
            <i className="fas fa-money-bill-alt" />
            Заказы
          </NavLink>
        </div>
        <div>Content</div>
      </div>
    );
  }
}

export default withRouter(Admin);
