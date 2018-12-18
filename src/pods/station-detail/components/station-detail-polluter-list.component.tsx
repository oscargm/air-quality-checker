
import { Chip } from '@material-ui/core';
import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import { WithStyles } from '@material-ui/core';
import styles from '../station-detail.styles';
import { LocalPolluter } from '../../../model/apiPolluter';

interface Props extends WithStyles<typeof styles> {
    polluter: LocalPolluter;
    stateClass: string;
}

const PolluterItemListComponent = (props: Props) =>
    <Chip
        label={props.polluter.abbreviation}
        onClick={() => { alert(props.polluter.abbreviation) }}
        className={props.stateClass}
        title={props.polluter.abbreviation+'\t'+props.polluter.lastMeasiringValue+' '+props.polluter.unit+'\t('+props.polluter.measuringType+').'}
    />

export const PolluterItemList = withStyles(styles)(PolluterItemListComponent);