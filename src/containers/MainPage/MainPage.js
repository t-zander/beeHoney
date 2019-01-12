import React from "react";
import "../../styles/mainPage.scss";
import beeMovie from "../../assets/videos/beeMovie.mp4";

const MainPage = () => {
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
          <button className="mainPage__btn">Заказать</button>
          <i className="material-icons mainPage__add">
            add
          </i>
          <p className="mainPage__text">
            Подробнее о продуктах
          </p>
        </div>
      </div>
    </div>
  );
};

export default MainPage;
