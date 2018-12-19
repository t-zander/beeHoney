import React from 'react';

const Product = (props) => {
  return (
    <div className="product">
      <div className="product__image">
        <img src="" alt=""/>
      </div>
      <div className="product__container">
        <h4 className="product__title">
          {props.product.name}
        </h4>
        <p className="product__description">
          {props.product.description}
        </p>
        <h3 className="product__price">
          {props.product.price}
        </h3>

        <button>В корзину</button>
      </div>
    </div>
  );
}
 
export default Product;