import React from "react";
import NewsCard from "./NewsCard";
import "./NewsList.css";
import Loading from "./Loading";
import request from "../Helper/request";
import useFetch from "../Helper/useFetch";

function NewsList() {
  const { news, loading, setPage, error } = useFetch(request.fetchDefault);

  return (
    <div className="news-list">
      {loading && <Loading />}
      {news &&
        news.articles.map((data, index) => (
          <NewsCard
            key={index}
            title={data.title}
            source={data.source.name}
            description={data.description}
            image={data.urlToImage}
            publishedAt={data.publishedAt}
            author={data.author}
            url={data.url}
          />
        ))}
      {news.articles.length < parseInt(news.totalResults) ? (
        <button disabled={loading} onClick={() => setPage((c) => c + 1)}>
          Loadmore
        </button>
      ) : null}
      {error && <div>upps.. ada gangguan</div>}
    </div>
  );
}

export default NewsList;
