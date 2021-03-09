import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from "../src/components/Header";
import Home from "../src/components/Home";
import Detail from "../src/components/Detail";

function App() {
  return (
    <Router>
      <Header />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/movie/:id">
          <Detail />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
