import { useState, useEffect } from "react";
import axios from "axios";

const useFetch = (url) => {
  const baseURL = "https://newsapi.org/v2/everything?q=";

  const [loading, setLoading] = useState(true);
  const [news, setNews] = useState(null);

  useEffect(() => {
    async function fetchData() {
      const response = await axios.get(baseURL + url);
      const result = response.data;
      setNews(result.articles);
      setLoading(false);
      return response;
    }
    fetchData();
  }, [url]);
  return { loading, news };
};

export default useFetch;
