import React, { Component } from "react";
import { connect } from "react-redux";
import * as actions from "../../actions/products/products";
import "./ProductsLayout.scss";
import { NavLink } from "react-router-dom";

class ProductsLayout extends Component {
  componentDidMount() {
    /* 
    this.props.onGetAllProducts();  */
    this.props.onGetProductsByCategory(this.props.match.params.categoryId);
  }

  componentDidUpdate(prev) {
    if (this.props.match.params.categoryId !== prev.match.params.categoryId) {
      this.props.onGetProductsByCategory(this.props.match.params.categoryId);
    }
  }

  render() {
    console.log(this.props);
    return (
      <section className="productsList">
        <div className="wrapper">
          <div className="productsList__list">
            {this.props.products.products.map(productsList => {
              return (
                <div key={productsList._id} className="productsList__product">
                  <div className="productsList__image">
                    <img src={productsList.imageUrl} />
                  </div>
                  <div className="productsList__content">
                    <NavLink className="productsList__link" to={`/shop/product/${ productsList._id}`}>
                      <h3 className="productsList__title">{productsList.name}</h3>
                    </NavLink>
                    <span className="productsList__price">
                      {productsList.price} грн.
                    </span>
                    <button className="productsList__add">
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

const mapStateToProps = state => {
  return {
    products: state.productsReducer
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onGetProductsByCategory: categoryId =>
      dispatch(
        actions.fetchByCategory(categoryId)
      ) /* 
    onGetAllProducts: () => dispatch(actions.fetchAll()) */
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ProductsLayout);
