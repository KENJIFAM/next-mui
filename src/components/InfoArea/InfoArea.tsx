import React from 'react';
import clsx from 'clsx';
import { SvgIconProps } from '@material-ui/core/SvgIcon';
import useStyles from './useStyles';

interface OwnProps {
  icon: React.ComponentType<SvgIconProps>;
  title: string;
  description: string;
  iconColor?: Color;
  vertical?: boolean;
}

type Color = 'primary' | 'warning' | 'danger' | 'success' | 'info' | 'rose' | 'gray';

type Props = OwnProps;

const InfoArea: React.FC<Props> = props => {
  const { title, description, iconColor = 'gray', vertical } = props;
  const classes = useStyles();

  const iconWrapper = clsx({
    [classes.iconWrapper]: true,
    [classes[iconColor]]: true,
    [classes.iconWrapperVertical]: vertical
  });
  const iconClasses = clsx({
    [classes.icon]: true,
    [classes.iconVertical]: vertical
  });
  return (
    <div className={classes.infoArea}>
      <div className={iconWrapper}>
        <props.icon className={iconClasses} />
      </div>
      <div className={classes.descriptionWrapper}>
        <h4 className={classes.title}>{title}</h4>
        <p className={classes.description}>{description}</p>
      </div>
    </div>
  );
};

export default InfoArea;
