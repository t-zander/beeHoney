import React, { Component } from "react";
import canImage from '../../assets/images/can.png'
import "./Product.scss";
import {NavLink} from "react-router-dom";

class Product extends Component {
  // нужно сделать еще чтоб был разный объем например 300 и 500мл
  // с бэка можно присылать

  state = {
    selectedPortion: 0,
    portions: [250, 500]
  };

  onSelectPortion = (index) => {
    this.setState({
      selectedPortion: index
    })
  };

  render() {
    return(
      <section className="under-header">
        <div className="product">
          <div className="product__leftPanel">
            <p className="product__discount">
              - 10 %
            </p>
            <p className="product__description">
              Обладает характерной горчинкой,
              которая проявлется через 2-3 минуты.
              Послевкусие приятное, тёплое, ореховое.
              Кристаллизуется медленно благодаря
              высокому содержанию фруктозы.
            </p>
          </div>

          <div className="product__image">
            <img src={canImage} alt=""/>
            <br/>
            <div className="product__portionWrapper">
              {this.state.portions.map( (portion, index) =>
                (<p
                  onClick={() => this.onSelectPortion(index)}
                  className={'product__portion ' + (this.state.selectedPortion === index ? 'selectedPortion' : '')}
                  key={index}>
                  {portion} мл
                </p>)
              )}
            </div>
          </div>

          <div className="product__rightPanel">
            <p className="product__name">
              Каштановый мёд
            </p>
            <div className="product__priceWrapper">
              <p className="product__currentPrice">
                99 грн
              </p>
              <p className="product__oldPrice">
                119 грн
              </p>
            </div>
            <div className="product__actions">
              <button className="product__add">
                <i className="material-icons">add</i>
              </button>
            </div>
          </div>
        </div>
    </section>
    );
  }
}

export default Product;
