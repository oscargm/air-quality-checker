import * as React from "react";
import { Paper, WithStyles, Typography } from "@material-ui/core";
import { withStyles } from '@material-ui/core/styles';
import styles from './station-detail.styles';
import { StationDetail } from './station-detail.vm';
import { StationDetailSubtitle } from "./station-detail.subtitle";

interface Props extends WithStyles<typeof styles> {
    stationDetail: StationDetail;
}

const StationDetailContainerInner = (props: Props) =>
    <Paper className={props.classes.pageContainer}>
        <Typography variant={'h4'}>{props.stationDetail.name}</Typography>
        <StationDetailSubtitle stationDetail={props.stationDetail}/>
        <Typography paragraph={true}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</Typography>
    </Paper>

export const StationDetailContainer = withStyles(styles)(StationDetailContainerInner);