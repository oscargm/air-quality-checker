import * as React from 'react';
import { Link } from 'react-router-dom';
import { ListItem, ListItemIcon, ListItemText, WithStyles } from '@material-ui/core';
import { Store } from '@material-ui/icons';
import { BasicStation } from './station-list.vm';
import { withStyles } from '@material-ui/core/styles';
import styles from './station-list.styles';

interface Props extends WithStyles<typeof styles> {
    station: BasicStation;
}

const StationListRowComponent = (props: Props) => (
    <Link className={props.classes.stationListRow} to={`/station/${props.station.eoiCode}`}>
        <ListItem button>
            <ListItemIcon>
                <Store />
            </ListItemIcon>
            <ListItemText primary={props.station.name} />
        </ListItem>
    </Link>
);

export const StationListRow = withStyles(styles)(StationListRowComponent);
