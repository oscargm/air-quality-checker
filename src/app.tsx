import * as React from 'react';
import { Route, Switch, HashRouter } from 'react-router-dom';
import { SceneStationDetail } from './scenes';

export class App extends React.Component<{}, {}> {
    render() {
        return (
            <HashRouter>
                <Switch>
                    <Route path={'/'} component={SceneStationDetail} />
                    <Route path={'/station/:eoiCode'} component={SceneStationDetail} />
                </Switch>
            </HashRouter>
        )
    }
}