import React,{Component} from 'react';
import './OrderCheckout.scss';
import CartList from '../CartList/CartList';
import Order from '../Order/Order';
import {Route, NavLink} from 'react-router-dom'


const OrderCheckout = (props) => {
  const {match} = props;

  return (
    <div className="container">
      <div className="container__wrapper">
        <NavLink className="container__link" to={ `${match.path}`} exact> 
          <i className='material-icons cart'>
            shopping_cart
          </i>
          <span>Корзина</span>
        </NavLink>

        <NavLink className="container__link" to={ `${match.path}/checkout`}>
          <i className="far fa-check-circle"></i>
          <span>Оформить заказ</span>
        </NavLink>
      </div>
      
      <Route exact path={match.path} component={CartList}/>
      <Route path={`${match.path}/checkout`} component={Order}/>
    </div>
  );
}
 
export default OrderCheckout;