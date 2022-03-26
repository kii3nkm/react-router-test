import { BrowserRouter, Link, Switch, Route } from "react-router-dom";

import { Home } from "./Home";
import { Page01 } from "./Page01";
import { Page02 } from "./Page02";

export default function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Link to="/">Home</Link>
        <br />
        <Link to="/page01">Page01</Link>
        <br />
        <Link to="/page02">Page02</Link>
      </div>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/page01">
          <Page01 />
        </Route>
        <Route path="/page02">
          <Page02 />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}
