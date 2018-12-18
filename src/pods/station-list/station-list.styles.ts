import { createStyles, Theme } from "@material-ui/core/styles";

export default (theme: Theme) => createStyles({
  pageContainer: {
    display: 'flex',
    flexDirection: 'column',
    width: '100%',
    height: '100%',
    boxSizing: 'border-box',
    padding: '2rem',
    overflow: 'auto',
    backgroundColor: 'white',

  },
  pageListTitle: {
    marginBottom: '2rem',
    textAlign: 'center'
  },
  subtitle: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    height: '100%'
  },
  pageDetailBody: {
    paddingTop:'2rem',
    boxSizing:'border-box'
  },
  stationInformation: {
    paddingTop: '1rem',
    width: '50%',
  },
  pollutersMeasured: {
    paddingTop: '1rem',
    width: '30%',
  },
  detailOverviewList: {
    listStyleType: 'none',
    paddingLeft: 0
  },
  polluterChip: {
    margin: theme.spacing.unit,
    alignItems: 'center',
  },
  polluterHealthy: {
    margin: theme.spacing.unit,
    backgroundColor: '#00FF00'
  },
  polluterWarning: {
    margin: theme.spacing.unit,
    backgroundColor: '#FFFF00'
  },
  polluterDanger: {
    margin: theme.spacing.unit,
    backgroundColor: '#FF9900',
    color: 'white'
  },
  polluterHeavyDanger: {
    margin: theme.spacing.unit,
    backgroundColor: '#FF0000',
    color: 'white'
  },
  stationListRow: {
    textDecoration: 'none'
  }
});
