import * as React from 'react'
import {
  Paper,
  WithStyles,
  Typography,
  ExpansionPanel,
  ExpansionPanelSummary,
  ExpansionPanelDetails,
} from '@material-ui/core'
import { withStyles } from '@material-ui/core/styles'
import styles from './station-list.styles'
import { connect } from 'react-redux'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore'
import { getProvinces } from './selectors'
import { Province } from './store'
import { getProvinces as getProvincesAction } from './actions';

interface StationListProps extends WithStyles<typeof styles> {
  provinces: Province[]
  getProvincesData: () => void;
}

const StationListContainer = (props: StationListProps) => {
  const { classes, provinces, getProvincesData } = props
  React.useEffect(() => {
    getProvincesData()
  }, [])
  React.useEffect(() => {
    console.log('props', props)
  })
  return (
    <Paper className={classes.pageContainer}>
      <Typography variant={'h1'} className={classes.pageListTitle}>
        Air Quality checker
      </Typography>
      <Typography paragraph={true}>
        <strong>Disclaimer</strong>, all this data is mocked from{' '}
        <a href="http://dtes.gencat.cat/icqa/">here</a>
      </Typography>
      {provinces && provinces.map((province: Province) => (
        <ExpansionPanel key={province.id}>
          <ExpansionPanelSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <Typography className={classes.heading}>{province.name}</Typography>
          </ExpansionPanelSummary>
          <ExpansionPanelDetails>
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
})

const mapDispatchToProps = dispatch => ({
  getProvincesData: () => dispatch(getProvincesAction())
})

export const StationList = connect(
  mapStateToProps, mapDispatchToProps
)(withStyles(styles)(StationListContainer))
