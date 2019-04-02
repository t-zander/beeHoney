import React, { Component } from "react";
import "./Admin.scss";
import * as categoriesActions from "../../actions/categories/categories";
import { fetchAll, fetchByCategory, deleteProductById } from '../../actions/products/products';
import { connect } from "react-redux";
import AdminAddProduct from "./AdminAddProduct/AdminAddProduct";

class Admin extends Component {
  componentWillMount() {
    this.props.onFetchCategories();
    this.props.onFetchProducts();
  }

  getProductsByCateg = (categoryId) => {
    this.props.onFetchByCategory(categoryId);
  }

  deleteProductHandler = (productId) => {
    this.props.onDeleteProductById(productId)
  }

  render() {
    return (
      <div className="admin">
        <div className="admin__categories">
          {this.props.categories.map(category => {
            return (
              <div
                onClick={() => this.getProductsByCateg(category._id)} 
                key={category._id}
                className="admin__category">
                <h1>{category.name}</h1>
              </div>
            );
          })}
        </div>

        <div className="admin__products">
          <AdminAddProduct/>
          {this.props.products.map(product => {
          return (
            <div className="admin__card" key={product._id}>
              <div className="admin__img">
                <img src={product.imageUrl} alt="img"/>
                <i className="admin__trashIcon fas fa-window-close" onClick={() => this.deleteProductHandler(product._id)}></i>
              </div>
              <div className="admin__cardCont">
                <h4>{product.name}</h4>
                <p>{product.description}</p>
                <h5>{product.price} грн.</h5>
                <button className="admin__edit">Изменить</button>
              </div>
            </div>
            )
          })}
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    categories: state.categoriesReducer.categories,
    products: state.productsReducer.products
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onFetchCategories: () => dispatch(categoriesActions.fetchAll()),
    onFetchProducts: () => dispatch(fetchAll()),
    onFetchByCategory: (categoryId) => dispatch(fetchByCategory(categoryId)),
    onDeleteProductById: (productId) => dispatch(deleteProductById(productId))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Admin);
