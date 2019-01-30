import React from "react";
import "./AdminSidebar.scss";
import logo from "../../../assets/images/logo.png";
import { Link, NavLink } from "react-router-dom";
import { withRouter } from "react-router";

const AdminSidebar = () => {
  return (
    <div className="sideBar">
      <div className="sideBar__name">
        <Link to="/">Bee Honey</Link>
      </div>
      <NavLink
        exact
        activeClassName="active"
        to="/admin"
        className="sideBar__navItem"
      >
        <i className="fab fa-forumbee" />
        Kатегории
      </NavLink>
      <NavLink to="/admin/about" className="sideBar__navItem">
        <i className="fas fa-user-alt" />О нас
      </NavLink>
      <NavLink to="/admin/orders" className="sideBar__navItem">
        <i className="fas fa-money-bill-alt" />
        Заказы
      </NavLink>
    </div>
  );
};

export default withRouter(AdminSidebar);
