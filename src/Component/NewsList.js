import React, { useContext } from "react";
import NewsCard from "./NewsCard";
import "./NewsList.css";
// import request from "../Helper/request";
// import axios from "axios";
import { NewsContext } from "../Helper/NewsContext";
import Loading from "./Loading";

function NewsList() {
  //   const baseURL = "https://newsapi.org/v2/everything?q=";
  //   const url = request.fetchDefault;

  //   const [loading, setLoading] = useState();
  //   const [news, setNews] = useState([]);

  //   useEffect(() => {
  //     async function fetchData() {
  //       const response = await axios.get(baseURL + url);
  //       const result = response.data;
  //       setNews(result.articles);
  //       return response;
  //     }
  //     fetchData();
  //   }, [url]);

  const [news, loading] = useContext(NewsContext);

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

export default NewsList;
