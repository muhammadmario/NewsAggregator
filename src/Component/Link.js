import React from "react";
import "./Link.css";

function Link({ image, title }) {
  return (
    <div className="link">
      <img src={image} alt="background" />
      <div className="title">
        <div className="wrap">
          <h4>{title}</h4>
        </div>
      </div>
    </div>
  );
}

export default Link;
