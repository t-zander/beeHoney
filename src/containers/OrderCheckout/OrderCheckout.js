/* import React, { Component } from "react";
import "./OrderCheckout.scss";
import CartList from "../CartList/CartList";
import Order from "../Order/Order";
import { Route, NavLink, Switch } from "react-router-dom";
import ErrorPage from "../../components/ErrorPage/ErrorPage";

const OrderCheckout = props => {
  const { match } = props;

  return (
    <div className="container">
      <div className="container__wrapper">
        <NavLink className="container__link" to={`${match.path}`} exact>
          <i className="material-icons cart">shopping_cart</i>
          <span>Корзина</span>
        </NavLink>

        <NavLink className="container__link" to={`${match.path}/checkout`}>
          <i className="far fa-check-circle" />
          <span>Оформить заказ</span>
        </NavLink>
      </div>
      <Switch>
        <Route exact path={match.path} component={CartList} />
        <Route exact path={`${match.path}/checkout`} component={Order} />
        <Route component={ErrorPage} />
      </Switch>
    </div>
  );
};

export default OrderCheckout;
 */
