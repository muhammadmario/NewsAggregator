import React from "react";
import "./NewsCard.css";

function NewsCard({
  author,
  image,
  title,
  source,
  description,
  publishedAt,
  url,
}) {
  return (
    <div className="news-card">
      <div className="image">
        <img src={image} alt="logo" />
      </div>
      <div className="info-wrap">
        <div className="info">
          <h1>{title}</h1>
          <p>{publishedAt}</p>
          <div className="links">
            <a href={author}>{author}</a>
            <p> || {source}</p>
          </div>
          <div className="desk">
            <p>{description}</p>
          </div>
        </div>
        <div className="goto">
          <a href={url}>Go to Website</a>
        </div>
      </div>
    </div>
  );
}

export default NewsCard;
