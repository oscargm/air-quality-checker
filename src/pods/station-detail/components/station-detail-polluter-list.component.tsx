import { Chip } from '@material-ui/core';
import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import { WithStyles } from '@material-ui/core';
import styles from '../station-detail.styles';
import { Polluter } from '../../../model/polluter';

interface Props extends WithStyles<typeof styles> {
    polluter: Polluter;
    stateClass: string;
}

const PolluterItemListComponent = (props: Props) => (
    <Chip
        label={props.polluter.abbreviation}
        onClick={() => alert(props.polluter.abbreviation)}
        className={props.stateClass}
        title={
            props.polluter.abbreviation +
            '\t' +
            props.polluter.lastMeasuredValue +
            ' ' +
            props.polluter.unit +
            '\t(' +
            props.polluter.sampleType +
            ').'
        }
    />
);

export const PolluterItemList = withStyles(styles)(PolluterItemListComponent);