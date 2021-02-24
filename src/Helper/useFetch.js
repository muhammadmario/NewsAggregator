import { useState, useEffect } from "react";
import axios from "axios";

const useFetch = (url) => {
  const baseURL = "https://newsapi.org/v2/everything?q=";

  const defaultNews = {
    status: "ok",
    totalResult: 0,
    articles: [],
  };

  const [loading, setLoading] = useState(true);
  const [news, setNews] = useState(defaultNews);
  const [page, setPage] = useState(1);
  const [error, setError] = useState(false);

  //   useEffect(() => {
  //     async function fetchData() {
  //       const response = await axios.get(baseURL + url);
  //       const result = response.data;
  //       setNews(result.articles);
  //       setLoading(false);
  //       return response;
  //     }
  //     fetchData();
  //   }, [url]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`${baseURL}${url}&page=${page}`);
        const result = await response.data;
        console.log(result);
        setNews((current) => {
          return {
            ...result,
            articles: [...current.articles, ...result.articles],
            totalResult: result.totalResult,
            status: result.status,
          };
        });

        if (result.status !== "ok") {
          throw new Error("error");
        }
      } catch (error) {
        setError(true);
      }
      setLoading(false);
    };
    fetchData();
  }, [page, url]);
  return { loading, news, page, setPage };
};

export default useFetch;
