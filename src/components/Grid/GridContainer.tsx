import React from 'react';
import createStyles from '@material-ui/core/styles/createStyles';
import makeStyles from '@material-ui/core/styles/makeStyles';
import Grid, { GridProps } from '@material-ui/core/Grid';

interface OwnProps {
  className?: string;
}

type Props = OwnProps & GridProps;

const GridContainer: React.FC<Props> = props => {
  const { children, className = '', ...rest } = props;
  const classes = useStyles();
  return (
    <Grid container {...rest} className={classes.grid + ' ' + className}>
      {children}
    </Grid>
  );
};

const useStyles = makeStyles(() => createStyles({
  grid: {
    marginRight: '-15px',
    marginLeft: '-15px',
    width: 'auto'
  }
}));

export default GridContainer;
