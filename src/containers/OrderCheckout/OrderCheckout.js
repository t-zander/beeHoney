import React,{Component} from 'react';
import './OrderCheckout.scss';
import CartList from '../CartList/CartList';
import Order from '../Order/Order';



class OrderCheckout extends Component {
  state = {
    currentStep: 0
  }

  setCurrentStep = (step) => {
    console.log(step);

    this.setState({
      currentStep: step
    })
  }

  componentsConnector = [
    <CartList/>,
    <Order/>
  ]
  
  render() {
    console.log('rerender') 
    return (
      <div className="container">
        <div className="container__wrapper">
          <div className='container__btnContainer'>
            <button 
              className="container__add" 
              disabled={this.state.currentStep === 0}
              onClick={() => this.setCurrentStep(0)}
              >
              Корзина
            </button>
            <button
              className="container__add"
              disabled={this.state.currentStep === 1}
              onClick={() => this.setCurrentStep(1)}
              >
              Оформить Заказ
            </button>
          </div>

          {this.componentsConnector[this.state.currentStep]}
        </div>
      </div>
    );
  }
}
 
export default OrderCheckout;