
import { Typography, Avatar, Chip } from '@material-ui/core';
import { ExtendedPolluter } from 'model/polluter';
import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import { WithStyles } from '@material-ui/core';
import styles from '../station-detail.styles';

interface Props extends WithStyles<typeof styles> {
    polluter: ExtendedPolluter;
    stateClass: string;
}

const PolluterItemListComponent = (props: Props) =>
    <Chip
        label={props.polluter.abbreviation}
        onClick={() => { alert(props.polluter.name) }}
        className={props.stateClass}
        title={props.polluter.name+' ('+props.polluter.analizingType+').'}
    />

export const PolluterItemList = withStyles(styles)(PolluterItemListComponent);