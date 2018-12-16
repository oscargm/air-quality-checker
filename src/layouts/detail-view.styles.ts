import { createStyles, Theme } from "@material-ui/core/styles";

export default (theme: Theme) => createStyles({
  '@global': {
    'body, html, #root': {
      margin: 0,
      padding: 0,
      width: '100%',
    },
    'body': {
      height:'100%',
      backgroundColor: theme.palette.grey['200'],
    }
  },
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    width: '100%',
    height: '100%',
    boxSizing: 'border-box',
    padding: '2rem 3rem',
    overflow: 'auto',
  }
});
