import React from 'react';
import '../../styles/cartList.scss';

const CartProduct = (props) => {
  const {product} = props;
  console.log(product);
  return (
    <div className="cart__item">
      <img src={product.imageUrl} alt=""/>
      <div className="cart__item__header">
        <h3>{product.name}</h3>
        <h4>Количество:</h4>
      </div>
    </div>
  );
}
 
export default CartProduct;