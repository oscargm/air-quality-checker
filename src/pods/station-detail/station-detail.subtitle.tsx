import { WithStyles, Card, CardHeader, CardContent, Typography, withStyles } from "@material-ui/core";
import React from "react";
import { ExtendedPolluter } from "model/polluter";
import { StationDetail } from "./station-detail.vm";
import styles from './station-detail.styles';
import { StationDetailOverviewData } from "./station-detail-data-overview.component";
import { StationPollutersOverview } from "./station-detail-polluters-data-overview.component";

interface Props extends WithStyles<typeof styles> {
    stationDetail: StationDetail;
}

const StationDetailSubtitleInner = (props: Props) =>
    <div className={props.classes.subtitle}>
        <Card className={props.classes.detailCard}>
            <CardHeader title='Station information' />
            <StationDetailOverviewData stationDetail={props.stationDetail} />
        </Card>
        <Card className={props.classes.detailCard}>
            <CardHeader title='Polluters measured' />
            <StationPollutersOverview polluters={props.stationDetail.polluters} />
        </Card>
    </div>

export const StationDetailSubtitle = withStyles(styles)(StationDetailSubtitleInner);