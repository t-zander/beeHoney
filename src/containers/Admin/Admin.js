import React, { Component } from "react";
import "./Admin.scss";
import * as categoriesActions from "../../actions/categories/categories";
import { fetchAll } from '../../actions/products/products';
import { connect } from "react-redux";
class Admin extends Component {
  componentWillMount() {
    this.props.onFetchCategories();
    this.props.onFetchProducts();
  }

  render() {
    return (
      <div className="admin">
        <div className="admin__categories">
          {this.props.categories.map(category => {
            return (
              <div key={category._id} className="admin__category">
                <h1>{category.name}</h1>
              </div>
            );
          })}
        </div>
        
       
        <div className="admin__products">
          {this.props.products.map(product => {
          console.log(product)
          return (
            <div className="admin__card" key={product._id}>
              <div className="admin__img">
                <img src={product.imageUrl} alt="img"/>
                <i className="admin__trash fas fa-window-close"></i>
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
    onFetchProducts: () => dispatch(fetchAll())
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Admin);
