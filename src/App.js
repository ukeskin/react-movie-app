import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Header from "../src/components/Header";
import Home from "../src/components/Home";
import MovieDetails from "../src/components/MovieDetails";
function App() {
  return (
    <Router>
      <Header />
      <Switch>
        <Route path="/">
          <Home />
        </Route>
        <Route path="/movie/:id" exact component={MovieDetails} />
      </Switch>
    </Router>
  );
}

export default App;
