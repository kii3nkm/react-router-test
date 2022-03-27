import { Route, Switch } from "react-router-dom";

import { Home } from "../Home";
import { page01Routes } from "./page01Routes";

export const Router = () => {
  return (
    <Switch>
      <Route exact path="/">
        <Home />
      </Route>
      <Route
        path="/page01"
        // renderはpropsを受け取っており、propsのmatch.urlに/page01が入っている
        render={({ match: { url } }) => (
          <Switch>
            {page01Routes.map((route) => (
              <Route
                key={route.path}
                exact={route.exact}
                path={`${url}${route.path}`}
              >
                {route.children}
              </Route>
            ))}
          </Switch>
        )}
      />
      {/* <Route path="/page02">
      <Page02 />
    </Route> */}
    </Switch>
  );
};
