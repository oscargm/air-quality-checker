import * as React from 'react'
import {
  Paper,
  WithStyles,
  Typography,
  List,
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

interface StationListProps extends WithStyles<typeof styles> {
  provinces: Province[]
}

const StationListContainerInner = (props: StationListProps) => {
  const { classes, provinces } = props
  return (
    <Paper className={classes.pageContainer}>
      <Typography variant={'h1'} className={classes.pageListTitle}>
        Air Quality checker
      </Typography>
      <Typography paragraph={true}>
        <strong>Disclaimer</strong>, all this data is mocked from{' '}
        <a href="http://dtes.gencat.cat/icqa/">here</a>
      </Typography>
      {provinces.map((province: Province) => (
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
export const StationListContainer = connect(
  mapStateToProps,
  null
)(withStyles(styles)(StationListContainerInner))
