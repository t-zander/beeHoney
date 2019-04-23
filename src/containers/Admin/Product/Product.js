import React from "react";
import { imageUrl } from "../../../config.json";

const Product = props => {
  const { product } = props;
  return (
    <div className="admin__card" key={product._id}>
      <div className="admin__img">
        <img src={`${imageUrl}${product.imageUrl}`} alt="img" />
        <i
          className="admin__trashIcon fas fa-window-close"
          onClick={() => props.delete(product._id)}
        />
      </div>
      <div className="admin__cardCont">
        <h4>{product.name}</h4>
        <p>{product.description}</p>
        <h5>{product.price} грн.</h5>
        <button className="admin__edit" onClick={() => props.edit(product._id)}>
          Изменить
        </button>
      </div>
    </div>
  );
};

export default Product;
