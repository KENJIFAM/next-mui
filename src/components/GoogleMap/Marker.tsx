import React from 'react';
import clsx from 'clsx';
import useStyles from './useStyles';

interface OwnProps {
  lat: number;
  lng: number;
  color: string;
  name: string;
}

type Props = OwnProps;

const Marker: React.FC<Props> = props => {
  const { color, name } = props;
  const classes = useStyles();
  return (
    <div>
      <div
        className={clsx(classes.pin, classes.bounce)}
        style={{ backgroundColor: color, cursor: 'pointer' }}
        title={name}
      />
      <div className={classes.pulse} />
    </div>
  );
};

export default Marker;