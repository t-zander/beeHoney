import React from "react";
import "../../styles/mainPage.scss";
import beeMovie from "../../assets/videos/beeMovie.mp4";
import {Link} from "react-router-dom";

const MainPage = (props) => {

  return (
    <div className="mainPage">
      <video autoPlay muted loop className="mainPage__video">
        <source src={beeMovie} type="video/mp4" />
      </video>
      <div className="mainPage__content">
        <p className="mainPage__title">
          Натуральный мёд
        </p>
        <p className="mainPage__description">
          Позвольте полезным продуктам стать частью вашего рациона
        </p>

        <div className="mainPage__btnGroup">
          <button className="mainPage__btn" onClick={() => {props.history.push('/shop')}}>Заказать</button>
          
          <Link to="/about" className="mainPage__aboutLink" >
            <i className="material-icons add">add</i>
            <span className="details">Подробнее...</span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default MainPage;
