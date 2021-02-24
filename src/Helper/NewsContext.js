// import { createContext, useEffect, useState } from "react";
// import request from "./request";
// import axios from "axios";

// export const NewsContext = createContext();

// export const NewsProvider = (props) => {
//   const baseURL = "https://newsapi.org/v2/everything?q=";
//   //   const url = request.fetchDefault;

//   const [loading, setLoading] = useState(true);
//   const [news, setNews] = useState(null);
//   const [url, setUrl] = useState(request.fetchApple);

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

//   return (
//     <NewsContext.Provider value={[news, loading, setUrl]}>
//       {props.children}
//     </NewsContext.Provider>
//   );
// };
