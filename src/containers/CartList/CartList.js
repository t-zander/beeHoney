import React, {Component} from 'react';
import {connect} from 'react-redux';
import {getProductsInCart} from '../../reducers/products';
import CartProduct from '../../components/CartProduct/CartProduct';
import '../../styles/cartList.scss';


class CartList extends Component {
  products = this.props.products;
  
  getTotalPrice = () => {
    const totalPriceArray = this.products.map(product => product.price);
    const totalPrice = totalPriceArray.reduce((current, next) => current + next);
    return totalPrice;
  }

  render() {
    return ( 
      <div className="cart">
        {this.products.length === 0 
          ? <p className="cart__empty">Корзина пуста...</p>
          : <div>
              {this.products.map(product => 
                <CartProduct key={product._id} product={product}/>
              )}
              <div className="cart__footer">
                <p>
                  Всего к оплате: {this.getTotalPrice()} грн
                </p>
                <button className="cart__btn">Оформить заказ</button>
              </div>
            </div>
        }
      </div>
    );
  }
}
 
const mapDispatchToProps = () => {

}

const mapStateToProps = (state) => {
  return {
    products: getProductsInCart(state.productsReducer)
  }
}

export default connect(mapStateToProps)(CartList);