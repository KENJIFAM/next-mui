import React from 'react';
import createStyles from '@material-ui/core/styles/createStyles';
import makeStyles from '@material-ui/core/styles/makeStyles';
import Grid, { GridProps } from '@material-ui/core/Grid';

interface OwnProps {
  className?: string;
}

type Props = OwnProps & GridProps;

const GridItem: React.FC<Props> = props => {
  const { children, className = '', ...rest } = props;
  const classes = useStyles();
  return (
    <Grid item {...rest} className={classes.grid + ' ' + className}>
      {children}
    </Grid>
  );
};

const useStyles = makeStyles(() => createStyles({
  grid: {
    position: 'relative',
    width: '100%',
    minHeight: '1px',
    paddingRight: '15px',
    paddingLeft: '15px',
    flexBasis: 'auto'
  }
}));

export default GridItem;
