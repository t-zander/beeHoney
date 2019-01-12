import React from "react";

const layout = props => {
  return <main style={
    window.location.pathname === '/' ?
      {
        position: "absolute",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        zIndex: 10}
    : null
  }>{props.children}</main>;
};

export default layout;
