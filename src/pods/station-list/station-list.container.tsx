import * as React from "react";
import { Paper, WithStyles, Typography, List, ListItem, ListItemIcon, ListItemText } from "@material-ui/core";
import { withStyles } from "@material-ui/core/styles";
import styles from "./station-list.styles";
import { BasicStation } from "./station-list.vm";
import { Store } from '@material-ui/icons';
import { stationListAPI } from "../../api/station-list-api";
import { Link } from "react-router-dom";
import { StationListRow } from './station-list-row.component';

interface Props extends WithStyles<typeof styles> { }

interface State {
  stationList: BasicStation[];
}

class StationListContainerInner extends React.Component<Props, State> {
  state: State = { stationList: [] };
  componentDidMount() {
    stationListAPI.getStationList().then(response => this.setState({ stationList: response }));
  }
  render() {
    const { classes } = this.props;
    return (
      <Paper className={classes.pageContainer}>
        <Typography variant={"h1"} className={classes.pageListTitle}>
          Air Quality checker
        </Typography>
        <List component="nav">
          {
            this.state.stationList.map((station: BasicStation) => {
              return (
                <StationListRow station={station}/>
              );
            })
          }
        </List>
      </Paper>
    )
  }
}
export const StationListContainer = withStyles(styles)(
  StationListContainerInner
);
