import "./App.css";
import Navbar from "./Component/Navbar";
import NewsList from "./Component/NewsList";
import SubNav from "./Component/SubNav";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Netflix from "./Pages/Netflix";
import Tesla from "./Pages/Tesla";
import Apple from "./Pages/Apple";
import Bitcoin from "./Pages/Bitcoin";
import Google from "./Pages/Google";
import Microsoft from "./Pages/Microsoft";
import Playstation from "./Pages/Playstation";

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <SubNav />
        <Switch>
          <Route path="/" exact component={NewsList} />
          <Route path="/apple" component={Apple} />
          <Route path="/bitcoin" component={Bitcoin} />
          <Route path="/google" component={Google} />
          <Route path="/microsoft" component={Microsoft} />
          <Route path="/netflix" component={Netflix} />
          <Route path="/playstation" component={Playstation} />
          <Route path="/tesla" component={Tesla} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
