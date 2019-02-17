import React from "react";
import "../../containers/CartList/CartList";

const CartProduct = props => {
  const { product } = props;

  /* const onChangeProductAmount = (e) => {
    console.log(e.target.value);
  } */

  return (
    <div className="cart__item">
      <div className="cart__leftPanel">
        <img src={product.imageUrl} alt=""/>
      </div>
      <div className="cart__rightPanel">
        <div className="cart__header">
          <i 
            className="far fa-times-circle cart__removeItem" 
            onClick={() => props.removeFromCart(product._id)}
            >
          </i> 
          <h3>{product.name}</h3>
        </div>
        <div className="cart__itemDetails">
          <h4>Количество: 
          <input type="number" value={product.amount} /* onChange={(e) => props.changeProductAmount(e, product._id)} *//>
          шт
          </h4>
          <p>Цена за шт. {product.price} грн</p>
        </div>
      </div>
      
    </div>
  );
};

export default CartProduct;
