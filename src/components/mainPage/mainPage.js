import React from "react";
import "../../styles/mainPage.scss";
import beeMovie from "../../assets/videos/beeMovie.mp4";
const mainPage = () => {
  return (
    <div className="mainPage">
      <video autoPlay muted loop className="mainPage__video">
        <source src={beeMovie} type="video/mp4" />
      </video>
    </div>
  );
};

export default mainPage;
