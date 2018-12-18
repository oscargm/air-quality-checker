
import { Typography, Avatar, Chip } from '@material-ui/core';
import { ExtendedPolluter } from 'model/polluter';
import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import { WithStyles } from '@material-ui/core';
import styles from '../station-detail.styles';
import ReactChartkick, { LineChart } from 'react-chartkick'
import Chart from 'chart.js'

ReactChartkick.addAdapter(Chart)

interface Props extends WithStyles<typeof styles> {
    stationName: string;
    data: {};
}

const convertData = (props) => {
    const arrData = {}
    props.data.map(dateData => {
        arrData[dateData.date] = (dateData["NO2 (µg/m³)"] === "Sense dades") ? '0': dateData["NO2 (µg/m³)"];
    })
    return arrData;
}

const StationDetailBodyComponent = (props: Props) =>
    <div className={props.classes.pageDetailBody}>
        <LineChart name={props.stationName} data={convertData(props)}/>
    </div>
export const StationDetailBody = withStyles(styles)(StationDetailBodyComponent);