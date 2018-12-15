
import { Typography, Avatar } from '@material-ui/core';
import { ExtendedPolluter } from 'model/polluter';
import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import { WithStyles } from '@material-ui/core';
import styles from './station-detail.styles';

interface Props extends WithStyles<typeof styles> {
    polluter: ExtendedPolluter;
    stateClass: string;
}

const PolluterItemListComponent = (props: Props) =>
    <li key={props.polluter.id} >
        <Typography style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'baseline'}}>
            <span>{props.polluter.name} ({props.polluter.analizingType}).</span>
            <Avatar className={props.stateClass}><Typography variant={'caption'}>{props.polluter.abbreviation}</Typography></Avatar>
        </Typography>
    </li>

export const PolluterItemList = withStyles(styles)(PolluterItemListComponent);