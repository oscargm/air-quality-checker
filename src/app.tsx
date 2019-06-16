import * as React from "react";
import { Route, Switch, Router } from "react-router-dom";
import { Provider } from 'react-redux'
import { store } from './store'
import { SceneLanding } from "./scenes";
import history from "./history";

export class App extends React.Component<{}, {}> {
  render() {
    return (
      <Provider store={store}>
        <Router history={history}>
          <Switch>
            <Route exact path={"/"} component={SceneLanding} />
          </Switch>
        </Router>
      </Provider>
    );
  }
}
