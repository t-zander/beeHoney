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
        <h4 className="product__title">
          {props.product.name}
        </h4>
        <p className="product__description">
          {props.product.description}
        </p>
        <h3 className="product__price">
          {props.product.price}
        </h3>

        <button className="product__btn">В корзину</button>
      </div>
    </div>
  );
}
 
export default Product;