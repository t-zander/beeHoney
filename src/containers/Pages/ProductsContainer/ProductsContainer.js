import React, {Component} from 'react';
import Product from '../../../components/Product/Product';

import { connect } from 'react-redux';
import * as actions from '../../../actions/products/products';

import '../../../styles/products.scss'

class ProductsContainer extends Component {
  componentDidMount() {
    this.props.onFetchProducts();
  }

  onAddProductToCart = (productId) => {
    this.props.onAddToCart(productId);
  }

  render() { 
    return (
      <div className="productsContainer">
        {this.props.products.map(product => (
          <Product key={product._id} product={product} onAddToCart={this.onAddProductToCart}/> )
        )}
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onFetchProducts: () => dispatch( actions.fetchAll() ),
    onAddToCart: (productId) => dispatch( actions.onAddProductToCart(productId) )
  }
}

const mapStateToProps = (state) => {
  return {
    products: state.productsReducer.products
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ProductsContainer);