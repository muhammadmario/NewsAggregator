import React from "react";
import NewsCard from "./NewsCard";
import "./NewsList.css";
import playstationImage from "../Image/PlayStation.jpg";

function NewsList() {
  return (
    <div className="news-list">
      <NewsCard image={playstationImage} />
      <NewsCard image={playstationImage} />
      <NewsCard image={playstationImage} />
    </div>
  );
}

export default NewsList;
