import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import { WithStyles } from '@material-ui/core';
import styles from '../station-detail.styles';
import ReactChartkick, { LineChart } from 'react-chartkick';
import Chart from 'chart.js';
import { Typography } from '@material-ui/core';
import { StationHistoricLineChart } from '../station-detail.vm';

ReactChartkick.addAdapter(Chart);

interface Props extends WithStyles<typeof styles> {
    stationName: string;
    data: StationHistoricLineChart[];
}

const StationDetailBodyComponent = (props: Props) => {
    if (props.data.length > 0) {
        return (
            <div className={props.classes.pageDetailBody}>
                <LineChart
                    name={props.stationName}
                    data={props.data}
                    xtitle='Dates'
                    ytitle='Concentration'
                />
            </div>
        );
    } else {
        return (
            <div className={props.classes.pageDetailBody}>
                <Typography variant={'h5'}>No data to display</Typography>
            </div>
        );
    }
};
export const StationDetailBody = withStyles(styles)(StationDetailBodyComponent);
