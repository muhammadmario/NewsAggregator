import React from "react";
import NewsCard from "../Component/NewsCard";
import Loading from "../Component/Loading";
import request from "../Helper/request";
import useFetch from "../Helper/useFetch";

function Google() {
  // const [news, loading] = useContext(NewsContext);

  const { news, loading } = useFetch(request.fetchGoogle);

  return (
    <div className="news-list">
      {loading && <Loading />}
      {news &&
        news.map((data) => (
          <NewsCard
            title={data.title}
            source={data.source.name}
            description={data.description}
            image={data.urlToImage}
            publishedAt={data.publishedAt}
            author={data.author}
            url={data.url}
          />
        ))}
    </div>
  );
}

export default Google;