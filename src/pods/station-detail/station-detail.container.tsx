import * as React from 'react';
import { Paper, WithStyles, Typography } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
import styles from './station-detail.styles';
import { StationDetail, getEmptyStationDetail } from './station-detail.vm';
import { StationDetailSubtitle } from './components/station-detail.subtitle';
import { StationDetailBody } from './components/station-detail-body.component';
import { getStationById } from './mappers';

interface Props extends WithStyles<typeof styles> {}

interface State {
    eoiCode: string;
    stationDetail: StationDetail;
}

class StationDetailContainerInner extends React.Component<Props, State> {
    constructor(props) {
        super(props);
        this.state = {
            stationDetail: getEmptyStationDetail(),
            eoiCode: props.match.params.eoiCode
        };
    }
    componentDidMount() {
        getStationById(this.state.eoiCode).then(stationDetail => {
            this.setState({
                stationDetail,
                eoiCode: this.state.eoiCode
            });
        });
    }
    render() {
        return (
            <Paper className={this.props.classes.pageContainer}>
                <Typography variant={'h4'} className={this.props.classes.pageDetailTitle}>
                    {this.state.stationDetail.name}
                </Typography>
                <StationDetailSubtitle stationDetail={this.state.stationDetail} />
                <StationDetailBody
                    stationName={this.state.stationDetail.name}
                    data={this.state.stationDetail.historics}
                />
            </Paper>
        );
    }
}

export const StationDetailContainer = withStyles(styles)(StationDetailContainerInner);
