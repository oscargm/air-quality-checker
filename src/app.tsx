import * as React from "react";
import { Route, Switch, Router } from "react-router-dom";
import { SceneLanding } from "./scenes";
import history from "./history";
import {StationListContainer} from './pods/station-list'

export class App extends React.Component<{}, {}> {
  render() {
    return (
      <Router history={history}>
        <Switch>
          <Route exact path={"/"} component={StationListContainer} />
        </Switch>
      </Router>
    );
  }
}
