import * as React from 'react';
import { withStyles, WithStyles } from "@material-ui/core/styles";
import styles from './detail-view.styles';

interface Props extends WithStyles<typeof styles> {
};

const DetailViewInner: React.StatelessComponent<Props> = (props) => (
  <div className={props.classes.container}>
    {props.children}
  </div>
);

export const DetailView = withStyles(styles)(DetailViewInner);
