import * as React from "react";
import { Paper, WithStyles, Typography } from "@material-ui/core";
import { withStyles } from "@material-ui/core/styles";
import styles from "./station-list.styles";
import { BasicStation } from "./station-list.vm";
import Axios from "axios";
import { stationListAPI } from "../../api/station-list-api";
import { Link } from "react-router-dom";

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
        <ul>
          {this.state.stationList.map((station: BasicStation) => {
            return (
              <li key={station.id}>
                <Link to={`/station/${station.eoiCode}`}>{station.name}</Link>
              </li>
            );
          })}
        </ul>
      </Paper>
    );
  }
}
export const StationListContainer = withStyles(styles)(
  StationListContainerInner
);
