import React,{Component} from 'react';
import './Order.scss';
import { connect } from "react-redux";
import * as actions from '../../actions/products/products';
import OrderProduct from '../../components/OrderProduct/OrderProduct';
import OrderForm from '../../components/OrderForm/OrderForm';
import { getFormValues } from 'redux-form'

class Order extends Component {

  checkoutOrderHandler = (productsInCart, customerInfo) => {
    console.log('productsInCart', productsInCart, customerInfo)
  }

  render() {
    const {productsInCart, customerInfo} = this.props;
    return (
      <div className="orderWrapper">
        <div className="orderWrapper__wrapper">
          <h2 className="orderWrapper__title">Оформить заказ</h2>

          <div className="main">
            <div className="main__leftPanel">
              <OrderForm/>
            </div>
            <div className="main__rightPanel">
              <h4>В корзине:</h4>
              {productsInCart.map(product => 
                <OrderProduct key={product._id} product={product}/>
              )}
              <div className="main__summary">
                <h3>К оплате:</h3>
                <button 
                  type="button" className="main__btnPrimary" 
                  onClick={() => this.checkoutOrderHandler(productsInCart, customerInfo)}
                  >
                  Заказать
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
    checkoutOrderHandler: (productsInCart, customerInfo) => dispatch(actions.checkoutOrder(productsInCart, customerInfo))
  }
};

const mapStateToProps = (state) => {
  return {
    productsInCart: state.productsReducer.productsInCart,
    customerInfo: getFormValues('orderForm')(state) // all values of OrderForm
  };
};


export default connect(mapStateToProps, mapDispatchToProps)(Order);