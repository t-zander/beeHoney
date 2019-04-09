import React, { Component } from "react";
import { connect } from "react-redux";
import * as actions from "../../actions/products/products";
import "./ProductsLayout.scss";
import { NavLink } from "react-router-dom";

class ProductsLayout extends Component {
  
  componentDidMount() {
    this.getProducts();
  }

  componentDidUpdate(prev) {
    if (this.props.match.params.categoryId !== prev.match.params.categoryId) {
      this.getProducts();
    }
  }

  getProducts = () => {
    const {categoryId} = this.props.match.params;
    if(categoryId) {
      this.props.onGetProductsByCategory(categoryId);
    }else{
      this.props.onGetAllProducts()
    }
  }

  onAddToCart = (product) => {
    this.props.onAddToCart(product);
  }

  render() {
    const {products} = this.props;
    if(products.length === 0) {
      return <h3>В этой категории пока нет продуктов...</h3>
    }else{
      return (
        <section className="productsList">
          <div className="wrapper">
            <div className="productsList__list">
              {products.map(product => {
                return (
                  <div key={product._id} className="productsList__product">
                    <div className="productsList__image">
                      <img src={product.imageUrl} alt="product"/>
                    </div>
                    <div className="productsList__content">
                      <NavLink className="productsList__link" to={`/shop/product/${ product._id}`}>
                        <h3 className="productsList__title">{product.name}</h3>
                      </NavLink>
                      <span className="productsList__price">
                        {product.price} грн.
                      </span>
                      <button className="productsList__add" onClick={() => this.onAddToCart(product)}>
                        <i className="material-icons">add</i>
                      </button>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>
      );
    }
  }
}

const mapStateToProps = state => {
  return {
    products: state.productsReducer.products
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onGetProductsByCategory: categoryId => dispatch(actions.fetchByCategory(categoryId)),
    onGetAllProducts: () => dispatch(actions.fetchAll()),
    onAddToCart: (product) => dispatch(actions.onAddProductToCart(product))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ProductsLayout);
