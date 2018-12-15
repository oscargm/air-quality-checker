import * as React from 'react';
import { CardContent } from '@material-ui/core';
import { WithStyles } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
import styles from './station-detail.styles';
import { ExtendedPolluter, polluterSaturationStates } from '../../model/polluter';
import { PolluterItemList } from './station-detail-polluter-list.component';

interface Props extends WithStyles<typeof styles> {
    polluters: ExtendedPolluter[];
}

const StationPollutersOverviewComponent = (props: Props) =>
    <CardContent>
        <ul className={props.classes.detailOverviewList}>
            {
                props.polluters.map((polluter: ExtendedPolluter) => {
                    switch(polluter.polluterSaturationState) {
                        case polluterSaturationStates.HEALTHY:
                            return (<PolluterItemList polluter={polluter} stateClass={props.classes.polluterHealthy}/>);
                        case polluterSaturationStates.WARNING:
                            return (<PolluterItemList polluter={polluter} stateClass={props.classes.polluterWarning}/>);
                        case polluterSaturationStates.DANGER:
                            return (<PolluterItemList polluter={polluter} stateClass={props.classes.polluterDanger}/>);
                        case polluterSaturationStates.HEAVYDANGER:
                            return (<PolluterItemList polluter={polluter} stateClass={props.classes.polluterHeavyDanger}/>);
                    }
                    return (<PolluterItemList polluter={polluter} stateClass={props.classes.polluterHealthy}/>);
                })
            }
        </ul>
    </CardContent>

export const StationPollutersOverview = withStyles(styles)(StationPollutersOverviewComponent);