import { createStyles, Theme } from "@material-ui/core/styles";

export default (theme: Theme) => createStyles({
  pageContainer: {
    display: 'flex',
    flexDirection: 'column',
    width: '100%',
    height: '100vh',
    boxSizing: 'border-box',
    padding: '2rem',
    overflow: 'auto',
    backgroundColor: 'white',
  },
  subtitle: { 
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  detailCard: {
    paddingTop:'1rem'
  },
  detailOverviewList: {
    listStyleType: 'none',
    paddingLeft: 0
  },
  polluterHealthy: {
    backgroundColor: '#00FF00'
  },
  polluterWarning: {
    backgroundColor: '#FFFF00'
  },
  polluterDanger: {
    backgroundColor: '#FF9900'
  },
  polluterHeavyDanger: {
    backgroundColor: '#FF0000'
  }
});
