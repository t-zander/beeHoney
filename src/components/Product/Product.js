import React from "react";
import "./Product.scss";

const Product = props => {
  const { product } = props;

  return (
    <div className="product">
      <div className="product__container">
        <div className="product__container__imageContainer">
          <img src={product.imageUrl} alt="" className="product__image" />
        </div>
        <h2 className="product__container__title">{product.name}</h2>
        <p className="product__container__description">{product.description}</p>
        <h3 className="product__container__price">Цена: {product.price} грн</h3>
      </div>
      <button
        className="product__btn"
        onClick={() => props.onAddToCart(product._id)}
      >
        В корзину
      </button>
    </div>
  );
};

export default Product;
