import React from 'react';
import '../../styles/products.scss';
import productImage from '../../assets/images/product-mockup-image.jpg';

const Product = (props) => {
  return (
    <div className="product">
      <div className="product__imageContainer">
        <img src={productImage} alt="" className="product__image"/>
      </div>
      <div className="product__container">
        <h2 className="product__container__title">
          {props.product.name}
        </h2>
        <p className="product__container__description">
          {props.product.description}
        </p>
        <h3 className="product__container__price">
          Цена: {props.product.price} грн
        </h3>

        <button className="product__container__btn">В корзину</button>
      </div>
    </div>
  );
}
 
export default Product;