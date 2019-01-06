import * as React from 'react';
import { CardContent } from '@material-ui/core';
import { WithStyles } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
import styles from '../station-detail.styles';
import { Polluter, SaturationLevel } from '../../../model/polluter';
import { PolluterItemList } from './station-detail-polluter-list.component';

interface Props extends WithStyles<typeof styles> {
    polluters: Polluter[];
}

const getStateClass = (saturationLevel: SaturationLevel, props: Props) =>
    saturationLevel === 'HEALTHY'
        ? props.classes.polluterHealthy
        : saturationLevel === 'WARNING'
        ? props.classes.polluterWarning
        : saturationLevel === 'DANGER'
        ? props.classes.polluterDanger
        : saturationLevel === 'HEAVYDANGER'
        ? props.classes.polluterHeavyDanger
        : props.classes.polluterUndefined;

const StationPollutersOverviewComponent = (props: Props) => (
    <CardContent>
        {props.polluters.map(polluter => {
            return (
                <PolluterItemList
                    polluter={polluter}
                    stateClass={getStateClass(polluter.polluterSaturationState, props)}
                    key={polluter.id}
                />
            );
        })}
    </CardContent>
);

export const StationPollutersOverview = withStyles(styles)(StationPollutersOverviewComponent);
