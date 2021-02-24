import "./App.css";
import Navbar from "./Component/Navbar";
import NewsList from "./Component/NewsList";
import SubNav from "./Component/SubNav";

function App() {
  return (
    <div className="App">
      <Navbar />
      <SubNav />
      <NewsList />
    </div>
  );
}

export default App;
