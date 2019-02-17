import React, { Component } from "react";
import { connect } from "react-redux";
import * as actions from '../../actions/products/products';
import CartProduct from "../../components/CartProduct/CartProduct";
import "./CartList.scss";

class CartList extends Component {
  getTotalPrice = () => {
    return this.props.productsInCart
      .map(product => product.price * product.amount)
      .reduce( (current, next) => current + next)
  };

  removeFromCart = (productId) => {
    this.props.onRemoveFromCart(productId);
  }

  render() {
    const{productsInCart} = this.props;
    return (
      <div className="cart">
        {productsInCart.length === 0 ? (
          <p className="cart__empty">Корзина пуста...</p>
        ) : (
          <div className="cart__list">
            {productsInCart.map(product => (
              <CartProduct key={product._id} product={product} removeFromCart={this.removeFromCart}/>
            ))}
            <div className="cart__footer">
              <p>Всего к оплате: {this.getTotalPrice()} грн</p>
              <button className="cart__btn">Оформить заказ</button>
            </div>
          </div>
        )}
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onRemoveFromCart: (productId) => dispatch(actions.removeProductFromCart(productId))
  }
};

const mapStateToProps = state => {
  return {
    productsInCart: state.productsReducer.productsInCart
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CartList);
