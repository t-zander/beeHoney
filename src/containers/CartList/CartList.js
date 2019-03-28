import React, { Component } from "react";
import { connect } from "react-redux";
import * as actions from '../../actions/products/products';
import "./CartList.scss";

class CartList extends Component {
  state = {
    selectedPortion: 0,
    portions: [250, 500]
  };

  onSelectPortion = (index) => {
    this.setState({
      selectedPortion: index
    })
  };
  
  getTotalPrice = () => {
    if(this.props.productsInCart.length) {
      return this.props.productsInCart
        .map(product => product.price * product.amount)
        .reduce( (current, next) => current + next)
    }else{
      return 0;
    }
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
                    <td>
                      <div className="cartList__portionContainer">
                        {this.state.portions.map( (portion, index) =>
                          (<p
                            onClick={() => this.onSelectPortion(index)}
                            className={'cartList__portion ' + (this.state.selectedPortion === index ? 'selectedPortion' : '')}
                            key={index}>
                            {portion} мл
                          </p>)
                        )}
                      </div>
                    </td>
                    <td>
                      <div className="cartList__amount">
                        <i 
                          className="material-icons cartList__controls" 
                          onClick={() => this.props.onDecreaseProductAmt(product._id)}>
                          keyboard_arrow_left
                        </i>
                        <p>{product.amount}</p>
                        <i 
                          className="material-icons cartList__controls"
                          onClick={() => this.props.onIncreaseProductAmt(product._id)}>
                          keyboard_arrow_right
                        </i>
                      </div>
                    </td>
                    <td>{product.price} грн</td>
                    <td>
                      <i 
                        className="material-icons cartList__controls" 
                        onClick={() => this.props.onRemoveFromCart(product._id)}>
                        close
                      </i>
                    </td>
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
                <h2>Итого: {this.getTotalPrice() + 50} грн</h2>
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
    onIncreaseProductAmt: (productId) => dispatch(actions.increaseProductAmt(productId)),
    onDecreaseProductAmt: (productId) => dispatch(actions.decreaseProductAmt(productId)),
    onRemoveFromCart: (productId) => dispatch(actions.removeProductFromCart(productId))
  }
};

const mapStateToProps = state => {
  return {
    productsInCart: state.productsReducer.productsInCart
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CartList);
