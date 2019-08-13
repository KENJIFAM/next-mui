import React from 'react';
import clsx from 'clsx';
import MuiButton, { ButtonProps } from '@material-ui/core/Button';
import useStyles from './useStyles';

interface OwnProps {
  color?: Color;
  size?: 'sm' | 'lg';
  simple?: boolean;
  round?: boolean;
  fullWidth?: boolean;
  disabled?: boolean;
  block?: boolean;
  link?: boolean;
  justIcon?: boolean;
  className?: string;
}

type Color = 'primary' | 'info' | 'success' | 'warning' | 'danger' | 'rose' | 'white' | 'facebook' | 'twitter' | 'google' | 'github' | 'transparent';

type Props = OwnProps & ButtonProps;

const Button = React.forwardRef<HTMLButtonElement, Props>((props, ref) => {
  const {
    color = 'primary',
    round,
    children,
    fullWidth,
    disabled,
    simple,
    size = 'lg',
    block,
    link,
    justIcon,
    className,
    ...rest
  } = props;

  const classes = useStyles();

  const btnClasses = clsx({
    [classes.button]: true,
    [classes[size]]: size,
    [classes[color]]: color,
    [classes.round]: round,
    [classes.fullWidth]: fullWidth,
    [classes.disabled]: disabled,
    [classes.simple]: simple,
    [classes.block]: block,
    [classes.link]: link,
    [classes.justIcon]: justIcon,
    [className!]: className !== undefined
  });
  return (
    <MuiButton {...rest} ref={ref} className={btnClasses}>
      {children}
    </MuiButton>
  );
});

export default Button;
