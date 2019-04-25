import React,{Component} from 'react';
import './Order.scss';

class Order extends Component {
  constructor(props) {
    super(props);
    this.state = {  }
  }
  render() { 
    return (
      <div className="orderWrapper">
        <div className="orderWrapper__wrapper">
          <h2>Оформить заказ</h2>
        </div>
      </div>
    );
  }
}
 
export default Order;