import React, {Component} from 'react';
import ProductsContainer from '../../containers/Pages/ProductsContainer/ProductsContainer';
import ProductsSidebar from '../../containers/Pages/ProductsSidebar/ProductsSidebar';
import '../../styles/shop.scss';

class Shop extends Component {
  render() { 
    return (
      <div className="shop">
        <div className="shop__products">
          <ProductsContainer/>
        </div>
        <div className="shop__sidebar">
          <ProductsSidebar/>
        </div>
      </div>
    );
  }
}
 
export default Shop;