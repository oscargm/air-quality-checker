import * as React from 'react';
import { StationDetail } from "./station-detail.vm";
import { Typography, CardContent } from '@material-ui/core';
import { WithStyles } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
import styles from './station-detail.styles';

interface Props extends WithStyles<typeof styles> {
    stationDetail: StationDetail;
}

const StationDetailOverviewDataComponent = (props: Props) =>
    <CardContent>
        <ul className={props.classes.detailOverviewList}>
            <li><Typography>EOI Code: {props.stationDetail.eoiCode}</Typography></li>
            <li><Typography>Name: {props.stationDetail.name}</Typography></li>
            <li><Typography>Installation date: {props.stationDetail.installationDate}</Typography></li>
            <li><Typography>Coordinates: {props.stationDetail.coords}</Typography></li>
            <li><Typography>Altitude: {props.stationDetail.altitude}</Typography></li>
            <li><Typography>Postal code: {props.stationDetail.cp}</Typography></li>
            <li><Typography>City: {props.stationDetail.city}</Typography></li>
            <li><Typography>Area type: {props.stationDetail.areaType}</Typography></li>
        </ul>
    </CardContent>

export const StationDetailOverviewData = withStyles(styles)(StationDetailOverviewDataComponent);