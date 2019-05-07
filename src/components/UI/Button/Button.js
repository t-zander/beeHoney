import React from "react";
import "./Button.scss";

const Button = props => {
  return (
    <button className={`btn ${props.className}`} onClick={props.click}>
      {props.children}
    </button>
  );
};
export default Button;
