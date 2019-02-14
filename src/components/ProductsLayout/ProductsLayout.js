import React, { Component } from "react";
import { connect } from "react-redux";
import * as actions from "../../actions/products/products";
import "./ProductsLayout.scss";
import { NavLink } from "react-router-dom";

class ProductsLayout extends Component {
  

  getProducts = () => {
    const {categoryId} = this.props.match.params;
    if(categoryId) {
      this.props.onGetProductsByCategory(categoryId);
    }else{
      this.props.onGetAllProducts()
    }
  }

  componentDidMount() {
    this.getProducts();
  }

  componentDidUpdate(prev) {
    if (this.props.match.params.categoryId !== prev.match.params.categoryId) {
      this.getProducts();
    }
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
              {products.map(productsList => {
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
}

const mapStateToProps = state => {
  return {
    products: state.productsReducer.products
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onGetProductsByCategory: categoryId =>
      dispatch(
        actions.fetchByCategory(categoryId)
      ),
    onGetAllProducts: () => dispatch(actions.fetchAll())
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ProductsLayout);
