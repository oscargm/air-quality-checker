import * as React from 'react'
import {
  Paper,
  WithStyles,
  Typography,
  ExpansionPanel,
  ExpansionPanelSummary,
  ExpansionPanelDetails,
  List,
  ListItem,
} from '@material-ui/core'
import { withStyles } from '@material-ui/core/styles'
import styles from './station-list.styles'
import { connect } from 'react-redux'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore'
import { getProvinces } from './selectors'
import { Province, Municipality } from './store'
import { getProvinces as getProvincesAction, getMunicipalities as getMunicipalitiesAction } from './actions';
import { getMunicipalitiesList } from './api/station-list.service';

interface StationListProps extends WithStyles<typeof styles> {
  provinces: Province[]
  getProvincesData: () => void;
  getMunicipalitiesData: (provinceId: number) => void;
}

const StationListContainer = (props: StationListProps) => {
  const [expanded, setExpanded] = React.useState(8);
  const { classes, provinces, getProvincesData, getMunicipalitiesData } = props;

  React.useEffect(() => {
    getProvincesData()
  }, []);

  const handleChange = (province: Province) => (event, isExpanded) => {
    console.log('province', province)
    !province.municipalities ? getMunicipalitiesData(province.id) : null;
    setExpanded(isExpanded ? province.id : 0);
  };
  return (
    <Paper className={classes.pageContainer}>
      <Typography variant={'h1'} className={classes.pageListTitle}>
        Air Quality checker
      </Typography>
      {provinces && provinces.length > 0 && provinces.map((province: Province) => (
        <ExpansionPanel key={province.id} expanded={expanded === province.id} onChange={handleChange(province)}>
          <ExpansionPanelSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <Typography className={classes.heading}>{province.name}</Typography>
          </ExpansionPanelSummary>
          <ExpansionPanelDetails>
            <List component="span" aria-label={`${province.name} municipalities`}>
              {province.municipalities && province.municipalities.length > 0 && province.municipalities.map((municipality: Municipality) => (
                <ListItem key={municipality.id}>{municipality.name}</ListItem>
              ))}
            </List>
            <Typography>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
              eget.
            </Typography>
          </ExpansionPanelDetails>
        </ExpansionPanel>
      ))}
    </Paper>
  )
}

const mapStateToProps = state => ({
  provinces: getProvinces(state),
  //municipalities: getMunicipalities(state)
})

const mapDispatchToProps = dispatch => ({
  getProvincesData: () => dispatch(getProvincesAction()),
  getMunicipalitiesData: (provinceId: number) => dispatch(getMunicipalitiesAction(provinceId))
})

export const StationList = connect(
  mapStateToProps, mapDispatchToProps
)(withStyles(styles)(StationListContainer))
