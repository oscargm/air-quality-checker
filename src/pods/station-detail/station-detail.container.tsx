import * as React from "react";
import { Paper, WithStyles, Typography } from "@material-ui/core";
import { withStyles } from "@material-ui/core/styles";
import styles from "./station-detail.styles";
import { StationDetail } from "./station-detail.vm";
import { StationDetailSubtitle } from "./components/station-detail.subtitle";
import { StationDetailBody } from "./components/station-detail-body.component";
import Axios from "axios";
interface Props extends WithStyles<typeof styles> {}

interface State {
  eoiCode: string;
  stationDetail: StationDetail;
}
class StationDetailContainerInner extends React.Component<Props, State> {
  constructor(props) {
    super(props);
    console.log(props);
    this.state = {
      stationDetail: {
        id: 0,
        name: "",
        eoiCode: "",
        altitude: 0,
        areaType: "",
        city: "",
        coords: [0, 0],
        cp: "",
        installationDate: "",
        polluters: []
      },
      eoiCode: props.match.params.eoiCode
    };
  }
  componentDidMount() {
    Axios.get(
      "http://dtes.gencat.cat/icqa/AppJava/getEstacio.do?codiEOI=" +
        this.state.eoiCode
    ).then(response => console.log(response.data));
  }
  render() {
    return (
      <Paper className={this.props.classes.pageContainer}>
        <Typography
          variant={"h4"}
          className={this.props.classes.pageDetailTitle}
        >
          {this.state.stationDetail.name}
        </Typography>
        <StationDetailSubtitle stationDetail={this.state.stationDetail} />
        <StationDetailBody />
      </Paper>
    );
  }
}
export const StationDetailContainer = withStyles(styles)(
  StationDetailContainerInner
);
