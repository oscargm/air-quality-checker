import { WithStyles, Card, CardHeader, CardContent, Typography, withStyles } from "@material-ui/core";
import React from "react";
import { ExtendedPolluter } from "model/polluter";
import { StationDetail } from "./station-detail.vm";
import styles from './station-detail.styles';

interface Props extends WithStyles<typeof styles> {
    stationDetail: StationDetail;
}

const StationDetailSubtitleInner = (props: Props) =>
    <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}>
        <Card>
            <CardHeader title='Station information' />
            <CardContent>
                <Typography>
                    <ul>
                        <li>EOI Code: {props.stationDetail.eoiCode}</li>
                        <li>Name: {props.stationDetail.name}</li>
                        <li>Installation date: {props.stationDetail.installationDate}</li>
                        <li>Coordinates: {props.stationDetail.coords}</li>
                        <li>Altitude: {props.stationDetail.altitude}</li>
                        <li>Postal code: {props.stationDetail.cp}</li>
                        <li>City: {props.stationDetail.city}</li>
                        <li>Area type: {props.stationDetail.areaType}</li>
                    </ul>
                </Typography>
            </CardContent>
        </Card>
        <Card>
            <CardHeader title='Polluters measured' />
            <CardContent>
                <Typography>
                    <ul>
                        {
                            props.stationDetail.polluters.map((polluter: ExtendedPolluter) => {
                                return <li key={polluter.id}>{polluter.abbreviation} - {polluter.name} ({polluter.analizingType}).</li>
                            })
                        }
                    </ul>
                </Typography>
            </CardContent>
        </Card>
    </div>

export const StationDetailSubtitle = withStyles(styles)(StationDetailSubtitleInner);