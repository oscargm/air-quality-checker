import * as React from "react";
import { Route, Switch, BrowserRouter } from "react-router-dom";
import { SceneStationDetail, SceneLanding } from "./scenes";

export class App extends React.Component<{}, {}> {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path={"/"} component={SceneLanding} />
          <Route path={"/station/:eoiCode"} component={SceneStationDetail} />
        </Switch>
      </BrowserRouter>
    );
  }
}
