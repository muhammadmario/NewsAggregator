import "./App.css";
import Navbar from "./Component/Navbar";
import NewsList from "./Component/NewsList";
import SubNav from "./Component/SubNav";
import { NewsProvider } from "./Helper/NewsContext";

function App() {
  return (
    <div className="App">
      <NewsProvider>
        <Navbar />
        <SubNav />
        <NewsList />
      </NewsProvider>
    </div>
  );
}

export default App;
