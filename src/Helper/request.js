const API_KEY = "fee76b478c934878a13b2306be9e3e18";

const requests = {
  fetchDefault = `https://newsapi.org/v2/everything?q=technology&apiKey=${API_KEY}`,
  fetchApple = `https://newsapi.org/v2/everything?q=apple&apiKey=${API_KEY}`,
  fetchTesla = `https://newsapi.org/v2/everything?q=tesla&apiKey=${API_KEY}`,
  fetchMicrosoft = `https://newsapi.org/v2/everything?q=microsoft&apiKey=${API_KEY}`,
  fetchPlayStation = `https://newsapi.org/v2/everything?q=playstation&apiKey=${API_KEY}`,
  fetchGoogle = `https://newsapi.org/v2/everything?q=google&apiKey=${API_KEY}`,
  fetchNetflix = `https://newsapi.org/v2/everything?q=netflix&apiKey=${API_KEY}`,
  fetchBitcoin = `https://newsapi.org/v2/everything?q=bitcoin&apiKey=${API_KEY}`
};

export default requests;
