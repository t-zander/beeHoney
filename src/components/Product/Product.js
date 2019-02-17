import React, { Component } from "react";
import canImage from '../../assets/images/can.png';
import "./Product.scss";
import { connect } from "react-redux";
import { NavLink } from "react-router-dom";
import * as actions from "../../actions/products/products";

class Product extends Component {
  
  // нужно сделать еще чтоб был разный объем например 300 и 500мл
  // с бэка можно присылать
  state = {
    selectedPortion: 0,
    portions: [250, 500]
  };

  componentDidMount() {
    const {id} = this.props.match.params;
    this.props.onGetProductById(id);
    
  }

  onSelectPortion = (index) => {
    this.setState({
      selectedPortion: index
    })
  };

  onAddToCart = (product) => {
    this.props.onAddToCart(product);
  }

  productTemplate() {
    const {product} = this.props;
    return (
      <section className="under-header">
        <div className="product">
          <NavLink className="product__goBackLink" to={`/shop/${product.categoryId}`}>
            К списку продуктов
          </NavLink>
          <div className="product__leftPanel">
            <p className="product__discount">
              - 10 %
            </p>
            <p className="product__description">
              {product.description}
            </p>
          </div>

          <div className="product__image">
            <img src={canImage} alt=""/>
            <br/>
            <div className="product__portionWrapper">
              {this.state.portions.map( (portion, index) =>
                (<p
                  onClick={() => this.onSelectPortion(index)}
                  className={'product__portion ' + (this.state.selectedPortion === index ? 'selectedPortion' : '')}
                  key={index}>
                  {portion} мл
                </p>)
              )}
            </div>
          </div>

          <div className="product__rightPanel">
            <p className="product__name">
              {product.name}
            </p>
            <div className="product__priceWrapper">
              <p className="product__currentPrice">
                {product.price} грн
              </p>
              <p className="product__oldPrice">
                119 грн
              </p>
            </div>
            <div className="product__actions">
              <button className="product__add" onClick={() => this.onAddToCart(product)}>
                <i className="material-icons">add</i>
              </button>
            </div>
          </div>
        </div>
      </section>
    );
  }
  loadingTemplate = (<h1>Loading...</h1>);

  render() {
    if(this.props.product) {
      return this.productTemplate();
    }else{
      return this.loadingTemplate;
    }
  }
}

const mapStateToProps = state => {
  return {
    product: state.productsReducer.selectedProduct
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onGetProductById: productId => dispatch(actions.fetchById(productId)),
    onAddToCart: (product) => dispatch(actions.onAddProductToCart(product))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Product);
