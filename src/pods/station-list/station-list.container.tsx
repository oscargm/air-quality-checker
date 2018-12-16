import * as React from "react";
import { Paper, WithStyles, Typography } from "@material-ui/core";
import { withStyles } from '@material-ui/core/styles';
import styles from './station-list.styles';
import { BasicStation } from "./station-list.vm";
import {stationListAPI} from "../../api/station-list-api";

interface Props extends WithStyles<typeof styles> { }

interface State {
    stationList: BasicStation[];
}

class StationListContainerInner extends React.Component<Props, State> {
    componentDidMount() {
        this.setState({stationList: stationListAPI.getStationList()});
    }
    render() {
        const { classes } = this.props;
        return (
            <Paper className={classes.pageContainer} >
                <Typography variant={'h1'} className={classes.pageListTitle}>Air Quality checker</Typography>
                <ul>

                    <li></li>
                </ul>
            </Paper >
        )
    }
}
export const StationListContainer = withStyles(styles)(StationListContainerInner);