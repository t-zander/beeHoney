import React from 'react';
import errorVideo from '../../assets/videos/oops.mp4';
import './ErrorPage.scss';

 const ErrorPage = (props) => {
  return (
    <div className="under-header errorpage">
      <video autoPlay muted loop className="errorpage__video">
        <source src={errorVideo} type="video/mp4" />
      </video>
      <div className="errorpage__content">
        <h4>
          Что-то пошло не так...
        </h4>
        <div className="errorpage__btnCont">
          <button onClick={() => props.history.push('/')}>На главную</button>
        </div>
      </div>
    </div>
  )
}

export default ErrorPage;
