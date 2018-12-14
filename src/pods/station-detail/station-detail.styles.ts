import { createStyles, Theme } from "@material-ui/core/styles";

export default (theme: Theme) => createStyles({
  pageContainer: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    width: '100%',
    height: '100vh',
    boxSizing: 'border-box',
    padding: '2rem',
    overflow: 'auto',
    backgroundColor: 'white',
  }
});
