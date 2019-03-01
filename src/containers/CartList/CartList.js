import React, { Component } from "react";
import { connect } from "react-redux";
import * as actions from '../../actions/products/products';
import CartProduct from "../../components/CartProduct/CartProduct";
import "./CartList.scss";

class CartList extends Component {
  state  = {
    newAmountValue: ''
  }
  getTotalPrice = () => {
    return this.props.productsInCart
      .map(product => product.price * product.amount)
      .reduce( (current, next) => current + next)
  };

  removeFromCart = (productId) => {
    this.props.onRemoveFromCart(productId);
  }

  /* changeProductAmount = (a, b) => {
    console.log(a, b);
  } */

  render() {
    const{productsInCart} = this.props;
    return (
      <div className="cartList">
        <div className="wrapper">
          <h2>Корзина</h2>
          <table className="cartList__table">
            <thead>
              <tr className="cartList__tableHeaderRow">
                <th>Продукт</th>
                <th>Описание</th>
                <th>Объем</th>
                <th>Количество</th>
                <th>Цена</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {productsInCart.map(product => {
                return (
                  <tr key={product._id} className="cartList__tableRow">
                    <td>
                      <div className="cartList__imageContainer">
                        <img src={product.imageUrl} alt="product"/>
                      </div>
                    </td>
                    <td>{product.description}</td>
                    <td>Объем</td>
                    <td className="cartList__amount">
                      <i className="fas fa-angle-left cartList__amountControls"></i>
                      {product.amount}
                      <i className="fas fa-angle-right cartList__amountControls"></i>
                    </td>
                    <td>{product.price}</td>
                    <td>X</td>
                  </tr>
                )
              })}
            </tbody>
          </table>

          <div className="cartList__priceControls">
            <div className="cartList__priceControlsContainer">
              <div className="cartList__price">
                <div className="cartList__top">
                  <p>Продукты:</p>
                  <p>{this.getTotalPrice()} грн</p>
                </div>
                <div className="cartList__bottom">
                  <p>Доставка:</p>
                  <p>50 грн</p>
                </div>
              </div>
              
              <div className="cartList__totalPrice">
                <h2>Итого:</h2>
              </div>
              <div className='cartList__btnContainer'>
                <button className="cartList__add">
                  Продолжить
                </button>
              </div>
              
            </div>
          </div>
        </div>
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
