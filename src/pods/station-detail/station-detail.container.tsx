import * as React from "react";
import { Paper, WithStyles, Typography } from "@material-ui/core";
import { withStyles } from '@material-ui/core/styles';
import styles from './station-detail.styles';
import { StationDetail } from './station-detail.vm';
import { StationDetailSubtitle } from "./components/station-detail.subtitle";
import { StationDetailBody } from "./components/station-detail-body.component";

interface Props extends WithStyles<typeof styles> {
    stationDetail: StationDetail;
}

const StationDetailContainerInner = (props: Props) =>
    <Paper className={props.classes.pageContainer}>
        <Typography variant={'h4'} className={props.classes.pageDetailTitle}>{props.stationDetail.name}</Typography>
        <StationDetailSubtitle stationDetail={props.stationDetail}/>
        <StationDetailBody/>
    </Paper>

export const StationDetailContainer = withStyles(styles)(StationDetailContainerInner);