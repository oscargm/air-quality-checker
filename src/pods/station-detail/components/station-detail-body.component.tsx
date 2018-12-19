
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
    const so2Data = {name: 'SO2 (µg/m³)', data: {}};
    const noData = {name: 'NO (µg/m³)', data: {}};
    const no2Data = {name: 'NO2 (µg/m³)', data: {}};
    const o3Data = {name : 'O3 (µg/m³)', data: {}};
    const coData = {name : 'CO (mg/m³)', data: {}};
    const pm10Data = {name : 'PM10 (µg/m³)', data: {}};


    props.data.map(dateData => {
        console.log(dateData);
        so2Data.data[dateData.date] = (dateData["SO2 (µg/m³)"] === "Sense dades") ? '0': dateData["SO2 (µg/m³)"];
        noData.data[dateData.date] = (dateData["NO (µg/m³)"] === "Sense dades") ? '0': dateData["NO (µg/m³)"];
        no2Data.data[dateData.date] = (dateData["NO2 (µg/m³)"] === "Sense dades") ? '0': dateData["NO2 (µg/m³)"];
        o3Data.data[dateData.date] = (dateData["O3 (µg/m³)"] === "Sense dades") ? '0': dateData["O3 (µg/m³)"];
        coData.data[dateData.date] = (dateData["CO (mg/m³)"] === "Sense dades") ? '0': dateData["CO (mg/m³)"];
        pm10Data.data[dateData.date] = (dateData["PM10 (µg/m³)"] === "Sense dades") ? '0': dateData["PM10 (µg/m³)"];
    })
    
    return [so2Data, noData, no2Data, o3Data, coData, pm10Data];
}

const StationDetailBodyComponent = (props: Props) =>
    <div className={props.classes.pageDetailBody}>
        <LineChart name={props.stationName} data={convertData(props)} xtitle="Dates" ytitle="Concentration" height={400}/>
    </div>
export const StationDetailBody = withStyles(styles)(StationDetailBodyComponent);