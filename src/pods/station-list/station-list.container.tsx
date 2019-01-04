import * as React from 'react';
import { Paper, WithStyles, Typography, List } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
import styles from './station-list.styles';
import { BasicStation } from './station-list.vm';
import { StationListRow } from './station-list-row.component';
import { getStationList } from './mappers';

interface Props extends WithStyles<typeof styles> {}

interface State {
    stationList: BasicStation[];
}

class StationListContainerInner extends React.Component<Props, State> {
    state: State = { stationList: [] };
    componentDidMount() {
        getStationList().then(stationList => this.setState({ stationList }));
    }
    render() {
        const { classes } = this.props;
        return (
            <Paper className={classes.pageContainer}>
                <Typography variant={'h1'} className={classes.pageListTitle}>
                    Air Quality checker
                </Typography>
                <Typography paragraph={true}>
                    <strong>Disclaimer</strong>, all this data is mocked from{' '}
                    <a href='http://dtes.gencat.cat/icqa/'>here</a>
                </Typography>
                <List component='nav'>
                    {this.state.stationList.map(station => (
                        <StationListRow station={station} key={station.id} />
                    ))}
                </List>
            </Paper>
        );
    }
}

export const StationListContainer = withStyles(styles)(StationListContainerInner);
