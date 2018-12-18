import * as React from "react";
import { Route, Switch, BrowserRouter, Router } from "react-router-dom";
import { SceneStationDetail, SceneLanding } from "./scenes";
import history from "./history";
export class App extends React.Component<{}, {}> {
  render() {
    return (
      <Router history={history}>
        <Switch>
          <Route exact path={"/"} component={SceneLanding} />
          <Route path={"/station/:eoiCode"} component={SceneStationDetail} />
        </Switch>
      </Router>
    );
  }
}
