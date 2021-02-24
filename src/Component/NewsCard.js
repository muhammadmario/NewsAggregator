import React from "react";
import "./NewsCard.css";

function NewsCard({ image }) {
  return (
    <div className="news-card">
      <div className="image">
        <img src={image} alt="logo" />
      </div>
      <div className="info-wrap">
        <div className="info">
          <h1>Title</h1>
          <p>12-02-2021</p>
          <div className="links">
            <a href="">https://google.com</a>
            <p> || BBC News</p>
          </div>
          <div className="desk">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio,
              rerum.
            </p>
          </div>
        </div>
        <div className="goto">
          <a href="">Go to Website</a>
        </div>
      </div>
    </div>
  );
}

export default NewsCard;
