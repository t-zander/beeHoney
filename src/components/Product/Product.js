import React from 'react';
import '../../styles/products.scss';

const Product = (props) => {

  return (
    <div className="product">
      <div className="product__container">
        <div className="product__container__imageContainer">
          <img src={props.product.imageUrl} alt="" className="product__image"/>
        </div>
        <h2 className="product__container__title">
          {props.product.name}
        </h2>
        <p className="product__container__description">
          {props.product.description}
        </p>
        <h3 className="product__container__price">
          Цена: {props.product.price} грн
        </h3>
      </div>
      <button className="product__btn">
        В корзину
      </button>
    </div>
  );
}
 
export default Product;