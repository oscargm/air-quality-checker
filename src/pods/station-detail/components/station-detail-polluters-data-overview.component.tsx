import * as React from 'react';
import { CardContent } from '@material-ui/core';
import { WithStyles } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
import styles from '../station-detail.styles';
import { ExtendedPolluter, polluterSaturationStates } from '../../../model/polluter';
import { PolluterItemList } from './station-detail-polluter-list.component';
import { LocalPolluter } from '../../../model/apiPolluter';

interface Props extends WithStyles<typeof styles> {
    polluters: LocalPolluter[];
}

const getSaturationState = (currentValue: number, regularMargin: number, poorMargin: number) => {
    if (currentValue && regularMargin && poorMargin) {
        if (currentValue < regularMargin) {
            return polluterSaturationStates.HEALTHY;
        } else {
            if (currentValue > regularMargin && currentValue < poorMargin) {
                return polluterSaturationStates.WARNING;
            } else {
                return polluterSaturationStates.HEAVYDANGER;
            }
        }
    }
}

const StationPollutersOverviewComponent = (props: Props) =>
    <CardContent>
        {
            props.polluters.map((polluter: LocalPolluter) => {
                switch (getSaturationState(Number(polluter.lastMeasiringValue), Number(polluter.regularMargin), Number(polluter.poorMargin))) {
                    case polluterSaturationStates.HEALTHY:
                        return (<PolluterItemList polluter={polluter} stateClass={props.classes.polluterHealthy} />);
                    case polluterSaturationStates.WARNING:
                        return (<PolluterItemList polluter={polluter} stateClass={props.classes.polluterWarning} />);
                    case polluterSaturationStates.HEAVYDANGER:
                        return (<PolluterItemList polluter={polluter} stateClass={props.classes.polluterHeavyDanger} />);
                    default:
                        return (<PolluterItemList polluter={polluter} stateClass={props.classes.polluterUndefined} />);
                }
            })
        }
    </CardContent>

export const StationPollutersOverview = withStyles(styles)(StationPollutersOverviewComponent);