import React from 'react';

const OrderProduct = ({product}) => {
  return(
    <div className="main__orderProduct">
      {/* <i className="material-icons cartList__controls">close</i> */}

      <div className="main__imageContainer">
        <img src={product.imageUrl} alt=""/>
      </div>
      <div>
        <p>{product.name}</p>
        <p>{product.price} грн</p>
      </div>
    </div>
    
  )
}

export default OrderProduct;