import React from "react";
import NewsCard from "../Component/NewsCard";
import Loading from "../Component/Loading";
import request from "../Helper/request";
import useFetch from "../Helper/useFetch";

function Bitcoin() {
  const { news, loading, setPage, error } = useFetch(request.fetchBitcoin);

  return (
    <div className="news-list">
      {error && <div>upps.. ada gangguan</div>}
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
    </div>
  );
}

export default Bitcoin;
