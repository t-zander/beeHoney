import React, { Component } from "react";
import ProductsContainer from "../../containers/Pages/ProductsContainer/ProductsContainer";
import ProductsSidebar from "../../containers/Pages/ProductsSidebar/ProductsSidebar";
import "./Shop.scss";

class Shop extends Component {
  render() {
    return (
      <div className="shop">
        <div className="shop__mainContent">
          <div className="shop__chooseCateg">
            <h3 className="shop__title">Наша продукция</h3>
          </div>
        </div>
        <div>
          <h1>ТОВАРЫ</h1>
        </div>

        {/*  <div className="shop__products">
          <ProductsContainer />
        </div>
        <div className="shop__sidebar">
          <ProductsSidebar />
        </div> */}
      </div>
    );
  }
}

export default Shop;
