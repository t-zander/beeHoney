import React, { Component } from "react";
import "./Admin.scss";
import logo from "../../assets/images/logo.png";
import { Link } from "react-router-dom";
class Admin extends Component {
  render() {
    return (
      <div className="admin">
        <div className="admin__sideBar">
          <div className="admin__name">
            <Link to="/">Bee Honey</Link>
          </div>
          <p className="admin__navItem active">Kатегории</p>
          <p className="admin__navItem">Tовары</p>
          <p className="admin__navItem">Блог</p>
        </div>
        <div>Content</div>
      </div>
    );
  }
}

export default Admin;
