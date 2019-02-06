import React, { Component } from "react";
import { connect } from "react-redux";
import * as actions from "../../actions/products/products";
import "./ProductsLayout.scss";

class ProductsLayout extends Component {
  componentDidMount() {
    this.props.onGetAllProducts(); /* 
    this.props.onGetProductsByCategory(this.props.match.params.categoryId); */
  }

  render() {
    console.log("PRODUCTS", this.props.products);
    return (
      <section className="productsList">
        <div className="wrapper">
          <div className="productsList__list">
            {this.props.products
              ? this.props.products.products.map(productsList => {
                  return productsList.categoryId ===
                    this.props.match.params.categoryId ? (
                    <div
                      key={productsList._id}
                      className="productsList__product"
                    >
                      <div className="productsList__image">
                        <img src={productsList.imageUrl} />
                      </div>
                      <div className="productsList__content">
                        <h3 className="productsList__title">
                          {productsList.name}
                        </h3>
                        <span className="productsList__price">
                          {productsList.price}
                        </span>
                        <button className="productsList__add">+</button>
                      </div>
                    </div>
                  ) : null;
                })
              : null}
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
      dispatch(actions.fetchByCategory(categoryId)),
    onGetAllProducts: () => dispatch(actions.fetchAll())
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ProductsLayout);
