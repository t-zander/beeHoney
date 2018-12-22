import React, {Component} from 'react';
import Product from '../../../components/Product/Product';

import { connect } from 'react-redux';
import * as actions from '../../../actions/products/products';

import '../../../styles/products.scss'

class ProductsContainer extends Component {
  componentDidMount() {
    this.props.onFetchProducts();
  }

  render() { 
    return (
      <div className="productsContainer">
        {this.props.products.map(product => <Product key={product.id} product={product}/> )}
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onFetchProducts: () => dispatch( actions.fetchAll() )
  }
}

const mapStateToProps = (state) => {
  return {
    products: state.productsReducer.products
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ProductsContainer);